"use client"
import { ChangeEvent, useEffect, useState } from "react";
import { BACKEND_URL } from "@/configVariables";
import { Product } from "../types";
import { ProductCard } from "../components/productCard";

export const SearchPage = () => 
{
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selCat, setSelCat] = useState<string>('smartphones');

    const fetchProducts = async () => {
      
        const response = await fetch(`https://dummyjson.com/products/category/${selCat}`);

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
    },[selCat]);

    const fetchCategories = async () => {
      
        const response = await fetch('https://dummyjson.com/products/categories');

        if(response.ok)
        {
            const cats = await response.json();
            return cats;
        }
        else {
            throw new Error("An error occured when trying to GET All Products");
          }

      }
    useEffect(()=>{
        fetchCategories().then((res)=>{
            setCategories(res);
            console.log(res);
        }).catch((err) => {
            console.log("There is an error when trying to fetch all products " + err);
            setCategories([])
        })
    },[]);

    let productDivs;
    if(products.length > 0)
    {
        productDivs = products.map((p) => <ProductCard product={p}/>);
    }

    let options;
    if(categories.length > 0)
    {
        options = categories.map((c) => <option value={c}>{c}</option>);
    }

    
    return(
        <>
        <div className="w-screen mx-auto text-center my-2" >
        <select className="w-6/12" value={selCat} onChange={(event:ChangeEvent<HTMLSelectElement>) => {setSelCat(event.target.selectedOptions[0].value)}}>
            {options}
        </select>

        </div>
        <div className="m-2 px-6 shadow">
            {productDivs}
        </div>
        </>
    )
}

export default SearchPage;