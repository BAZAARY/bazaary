import { GET_PRODUCT_NAME_AND_PRICE } from "../../connections/queriesCatalogo";
import client from "../../connections/apollo"

async function getCostofAllProducts(productId) {
    try {
        const { data } = await client.query({
            query: GET_PRODUCT_NAME_AND_PRICE,
            variables: {
                productId
            }
        });

        if (data && data.getProductNameAndPriceWithId[0]) {
            const precio = data.getProductNameAndPriceWithId[0].price;
            return { precio };
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
}

export default getCostofAllProducts;