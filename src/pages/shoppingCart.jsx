import React, { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import imageExample from "../components/img/61WikOg1SQL._AC_AA180_.jpg"
import axios from 'axios';
import ProductItem from "../components/ProductItem";

const ShoppingCart = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data,setData] =useState([]) 
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getProducts')
            .then((response)=> {
                setData(response.data)
            })
            .catch((error)=>{
                console.error('Error:', error)
            })
            .finally(() =>{
                setIsLoading(false)
            })
    }, []);
    return(
        <>
        {isLoading ? (
            <LoadingPage/>
        ):(
            <div className="overflow-auto flex flex-col items-center md:flex-row md:items-start">
                <div className="mt-5 w-11/12 md:w-2/3 md:mt-20 md:ml-14">
                    {data.map((product, index) => (
                        <ProductItem key={index} imageExample={imageExample} index={index} product={product}/>
                    ))}
                </div>
                <div className="mt-5 w-11/12 md:flex md:justify-center md:mt-20 md:w-2/5">
                    <div className="rounded-lg shadow-xl h-44 mb-5 bg-[#d9d9d9] md:w-2/4 md:h-60 md:rounded-sm">

                    </div>
                </div>
            </div>
        )}
        </>
    )
}


export default ShoppingCart;