import React from "react";
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';

const GET_PRODUCTS = gql`
  query GetProducts($name_contains: String) {
    products(name_contains: $name_contains) {
      id
      name
      price
    }
  }
`;

const SearchBar = () => {
  const location = useLocation();
  const searchValue = new URLSearchParams(location.search).get('query');

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { name_contains: searchValue }
  });

 

  if (loading) {
    return <p>Realizando búsqueda...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.products.map(product => (
        <div key={product.id} style={{ width: '200px', height: '200px', border: '1px solid #ccc', margin: '10px', padding: '20px' }}>
          <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{product.name}</p>
          <p style={{ fontSize: '1em', color: 'green' }}>${product.price}</p>
        </div>
      ))}
      {data.products.length === 0 && <p>No se encontraron resultados</p>}
    </div>
  );
};

export default SearchBar;
