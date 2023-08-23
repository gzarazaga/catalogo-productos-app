import React, { useState, useEffect } from 'react';
import Product from './Product'; // Importa el componente Product
import styled from 'styled-components';
import prods from '../data/products.json'

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ProductList = () => {

  return (
    <ProductListWrapper>
      {prods.map(product => (
        <Product product={product} />
      ))}
    </ProductListWrapper>
  );
}

export default ProductList;
