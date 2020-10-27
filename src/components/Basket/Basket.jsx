import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import uniqWith from 'lodash.uniqwith';

import { useAuth } from '../../contexts';
import { GET_SETTINGS, GET_USERS_BY_NETLIFY_ID } from './Basket.gql';
import { BasketTotal } from '../BasketTotal';
import { FloatingButton } from '../FloatingButton';
import { Grid } from '../Grid';
import { ProductCard } from '../ProductCard';

export const Basket = () => {
  const { push } = useHistory();
  const { user } = useAuth();
  const { id: netlifyId } = user || {};

  const {
    data: { allSettings: [{ minOrderValue } = {}] = [] } = {},
  } = useQuery(GET_SETTINGS);

  const [getUser, { data: { allUsers } = {} }] = useLazyQuery(
    GET_USERS_BY_NETLIFY_ID,
    {
      variables: { netlifyId },
    },
  );

  useEffect(() => {
    if (netlifyId) getUser();
  }, [netlifyId, getUser]);

  const [{ orders = [] } = {}] = allUsers || [];
  const { orderItems = [] } = orders.find(({ submitted }) => !submitted) || {};

  const orderItemProducts = uniqWith(
    orderItems,
    (a, b) => a.productVariant.product.id === b.productVariant.product.id,
  );

  const meetsMinOrderValue = BasketTotal() >= minOrderValue;

  return (
    <>
      <Grid>
        {orderItemProducts.map(({ id, productVariant: { product } = {} }) => (
          <ProductCard key={id} product={product} />
        ))}
      </Grid>
      <FloatingButton
        disabled={!meetsMinOrderValue}
        onClick={() => push('/checkout')}
      >
        Continue to checkout
      </FloatingButton>
    </>
  );
};
