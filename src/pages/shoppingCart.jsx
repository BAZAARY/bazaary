import React, { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import imageExample from "../components/img/61WikOg1SQL._AC_AA180_.jpg"
import axios from 'axios';

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
                            <div id={`Producto ${index}`} key={index} className="rounded-lg shadow-xl w-full h-52 mb-5 bg-[#d9d9d9] md:h-60 md:rounded-sm">
                                <div className="grid grid-rows-4 grid-cols-3 grid-flow-row h-full"> 
                                    <img src={imageExample} className=" row-start-1 row-end-4 self-center row-span-3 ml-4 rounded-2xl h-4/5 w-11/12 "/>
                                    <div className=" row-start-4 ml-6 justify-center flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="3" min="1"/>
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>                                    
                                    <h2 className="row-start-1 col-span-2 text-sm mt-4 self-start font-text ml-4 "> {product.producto}</h2>
                                    <h2 className=" self-center row-start-2 ml-4 font-text text-xl"> $70000 </h2>
                                    <div className="flex items-center justify-center col-start-2 row-start-3 ml-4 col-span-2 ">
                                        <button className=" w-10/12 h-3/4 rounded-lg font-text text-sm bg-[#fd9200]"> eliminar </button>
                                    </div>
                                    <div className="flex items-center justify-center col-start-2 row-start-4 ml-4 col-span-2 ">
                                        <button className="w-10/12 h-3/4 rounded-lg font-text text-sm bg-[#fd9200]"> guardar </button>                                   
                                    </div>

                                </div>
                            </div>
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