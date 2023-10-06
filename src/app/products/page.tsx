"use client"
import { useEffect, useState } from "react";
import { BACKEND_URL } from "@/configVariables";

export default () => 
{
    interface Product {
        id: number
        title: string
        description: string
        price: number
        discountPercentage: number
        rating: number
        stock: number
        brand: string
        category: string
        thumbnail: string
        images: string[]
      }
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
        productDivs = products.map((p) => <div>{p.title}</div>);
    }

    return(
        <>
        <h1>Products Page</h1>
        <div>
            {productDivs}
        </div>
        </>
    )
}