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

export const addProduct = gql`
    mutation addproduct($usuario: Int!, $producto: Int!){
        addproduct(usuario:$usuario, producto:$producto){
            producto
            cantidad
            estadoCompra
        }
    }
`;
