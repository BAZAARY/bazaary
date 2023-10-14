import React, { useEffect, useState } from "react";
import axios from 'axios';

const ShoppingCart = () => {
    
    const [data,setData] =useState([]) 

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getProducts')
            .then((response)=> {
                setData(response.data)
            })
            .catch((error)=>{
                console.error('Error:', error)
            })
    }, []);


    return(
        <div className="overflow-auto flex flex-col items-center md:flex-row md:items-start">
            <div className="mt-5 w-11/12 md:w-2/3 md:mt-20 md:ml-14">
                {data.map((product, index) => (
                        <div id={`Producto ${index}`} key={index} className=" rounded-lg shadow-xl w-full h-44 mb-5 bg-[#ffdcb7] md:h-60 md:rounded-sm">
                            <h2 className="text-center font-text"> {product.producto}</h2>
                        </div>
                ))}
            </div>
            <div className="mt-5 w-11/12 md:flex md:justify-center md:mt-20 md:w-2/5">
                <div className="rounded-lg shadow-xl h-44 mb-5 bg-[#ffdcb7] md:w-2/4 md:h-60 md:rounded-sm">

                </div>
            </div>
        </div>
    )
}


export default ShoppingCart;