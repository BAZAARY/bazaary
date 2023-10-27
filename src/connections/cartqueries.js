import { gql } from "@apollo/client";

export const get_products = gql`
    query{
        products(usuario:""){
            id
            usuario
            producto
            cantidad
            estadoCompra    
        }
    }
`;