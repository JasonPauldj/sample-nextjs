"use client"
import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductDetailedCard from "../components/productDetailedCard";

export default ({params} : {params: {id:number}}) => {


    const [product, setProduct] = useState<Product>();

    const fetchProduct = async () => {
      
        const response = await fetch(`https://dummyjson.com/product/${params.id}`);

        if(response.ok)
        {
            const prod = await response.json();
            return prod;
        }
        else {
            throw new Error("An error occured when trying to GET A Products");
          }

      }
    useEffect(()=>{
        fetchProduct().then((res)=>{
            setProduct(res);
            console.log(res);
        }).catch((err) => {
            console.log("There is an error when trying to fetch A products " + err);
            setProduct(undefined)
        })
    },[]);


    return(
    <div>
        {product ?  
        <ProductDetailedCard  product={product}/>  : <div>No Product found</div>    }
    </div>
         
   
    )
}