import { gql } from "@apollo/client";

export const get_products = gql`
    query{
        products(usuario:""){
            usuario
            producto
            cantidad
            estadoCompra    
        }
    }
`;