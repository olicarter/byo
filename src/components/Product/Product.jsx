import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_PRODUCT_QUERY } from './Product.queries';
import * as Styled from './Product.styled';
import { AddToOrderButton } from '../AddToOrderButton';

export const Product = ({ id }) => {
  const { data: { product: { name, price } = {} } = {} } = useQuery(
    GET_PRODUCT_QUERY,
    {
      variables: { id },
    },
  );

  return (
    <Styled.Product className="Product">
      <Styled.Image src={`https://source.unsplash.com/300x300/?${name}`} />
      <Styled.Header>
        <span>{name}</span>
        <span>£{(price / 100).toFixed(2)}</span>
      </Styled.Header>
      <AddToOrderButton />
    </Styled.Product>
  );
};
