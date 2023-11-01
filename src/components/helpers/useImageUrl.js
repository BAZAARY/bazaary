import { useQuery } from "@apollo/client";
import { GET_IMAGE_ID } from "../../connections/queriesCatalogo";
import { getAPIFastAPIURL } from "../FastAPIURL/fastapicon";

function useImageUrl(productId){
    const {error, data} = useQuery(GET_IMAGE_ID, {
        variables:{
            productId
        }
    })
    if(error) return {error: error.message}
    if (data && data.getImageAIdWithProductId){
        const imageId = data.getImageAIdWithProductId
        const url = `${getAPIFastAPIURL()}/get_image/?img_id=${imageId}`
        return {url}
    }
}

export default useImageUrl