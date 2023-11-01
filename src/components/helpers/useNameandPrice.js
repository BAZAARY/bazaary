import { useQuery } from "@apollo/client";
import { GET_PRODUCT_NAME_AND_PRICE } from "../../connections/queriesCatalogo";

function useNameandPrice(productId){
    const {error, data} = useQuery(GET_PRODUCT_NAME_AND_PRICE, {
        variables:{
            productId
        }
    })
    if(error) return {error: error.message}
    if (data && data.getProductNameAndPriceWithId[0]){
        const nombre = data.getProductNameAndPriceWithId[0].name
        const precio = data.getProductNameAndPriceWithId[0].price
        return {nombre, precio}
    }
}

export default useNameandPrice