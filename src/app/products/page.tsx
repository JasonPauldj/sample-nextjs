"use client"
import { useEffect, useState } from "react";
import { BACKEND_URL } from "@/configVariables";
import { Product } from "./types";
import { ProductCard } from "./components/productCard";

export const ProductHomePage = () => 
{
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
      
        const response = await fetch('https://dummyjson.com/products');

        if(response.ok)
        {
            const prods = await response.json();
            return prods;
        }
        else {
            throw new Error("An error occured when trying to GET All Products");
          }

      }
    useEffect(()=>{
        fetchProducts().then((res)=>{
            setProducts(res.products);
            console.log(res);
        }).catch((err) => {
            console.log("There is an error when trying to fetch all products " + err);
            setProducts([])
        })
    },[]);

    let productDivs;
    if(products.length > 0)
    {
        productDivs = products.map((p) => <ProductCard product={p}/>);
    }

    return(
        <>
        <div className="m-2 px-6 shadow">
            {productDivs}
        </div>
        </>
    )
}

export default ProductHomePage;