import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 1rem;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Product = ({ product }) => {
  return (
    <ProductWrapper>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductDetails>
    </ProductWrapper>
  );
}

export default Product;
