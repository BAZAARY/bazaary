import React, { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import imageExample from "../components/img/61WikOg1SQL._AC_AA180_.jpg"
import ProductItem from "../components/ProductItem";
import { get_products } from "../connections/cartqueries";
import { useQuery, useMutation } from "@apollo/client";

const ShoppingCart = () => {
    const {loading, error, data} = useQuery(get_products);

    if (loading) {
      return <LoadingPage />;
    }
  
    if (error) {
      console.error("Error:", error);
    }
    const products = data.products;

    return(
        <div className="overflow-auto flex flex-col items-center md:flex-row md:items-start">
            <div className="mt-5 w-11/12 md:w-2/3 md:mt-20 md:ml-14">
                {products.map((product, index) => (
                    <ProductItem key={index} imageExample={imageExample} index={index} product={product}/>
                ))}
            </div>
            <div className="mt-5 w-11/12 md:flex md:justify-center md:mt-20 md:w-2/5">
                <div className="rounded-lg shadow-xl h-44 mb-5 bg-[#d9d9d9] md:w-2/4 md:h-60 md:rounded-sm">

                </div>
            </div>
        </div>
    )
}


export default ShoppingCart;