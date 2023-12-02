import React, { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import ProductItem from "../components/ProductItem";
import { get_products } from "../connections/cartqueries";
import { getId } from "../components/helpers/getId";
import { useQuery} from "@apollo/client";
import getCostofAllProducts from "../components/helpers/getCostofAllProducts";

const ShoppingCart = () => {   
    const userId = getId()
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(null)
    const {loading, error, data} = useQuery(get_products, {
        variables:{
            usuario: userId
        },
        fetchPolicy: 'network-only'
    }); 
    
    // Sacar ids de los productos
    const idsProductos = products.map(producto => producto.producto)
    // Traer un array con todos los precios de cada producto
    const PromisePrecios = idsProductos.map(id => getCostofAllProducts(id))
    // Esperar a la promesa y guardar el resultado de la suma total
    Promise.all(PromisePrecios)
        .then(arrayPrecios => {
            const precioProductos = arrayPrecios.map(objetoPrecio => objetoPrecio.precio)
            const sumaPrecios = precioProductos.reduce((preTotal, precio) => preTotal + precio, 0)
            setTotalPrice(sumaPrecios)
        })
        .catch(error => {
            console.error("Error al obtener los precios", error)
        });


    useEffect(()=> {
        if(data && data.listuserproducts){
            setProducts(data.listuserproducts)
        }
    }, [data])

    if (loading) {
      return <LoadingPage />;
    }
       
    if (error) {
      console.error("Error:", error);
    }
    
    return(
        <div className="overflow-auto flex flex-col md:justify-center items-center md:flex-row md:items-start">
            <div className="mt-5 w-11/12 md:w-5/12 md:mt-20 md:ml-14">
                {products.map((item, index) => (
                    <ProductItem key={index} index={index} item={item} setProducts={setProducts} id={userId}/>
                ))}
            </div>
            <div className="mt-5 w-11/12 md:flex md:mt-20 md:w-1/3 md:justify-end">
                <div className="flex flex-col items-center rounded-lg shadow-xl md:shadow-[#a6a6a6] shadow-[#646464] h-44 mb-5 bg-[#d9d9d9] md:w-2/3 md:h-60 md:rounded-sm">
                    <div className="font-text mt-2 md:mt-3 text-lg"> Resumen de tu carrito: </div>
                    <div className="font-text mt-4 md:mt-10 text-lg"> Precio total: {totalPrice != null ? `$${totalPrice}` : `Calculando total...`}</div>
                    <div className="font-text mt-4 md:mt-5 text-md md:text-lg"> Gastos de envio: $15000</div>
                    <div className="flex w-full h-1/5 justify-center mt-4 md:mt-6">
                        <button className="w-2/4 rounded-lg font-text text-lg bg-[#fd9200]"> Comprar </button>                                   
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ShoppingCart;