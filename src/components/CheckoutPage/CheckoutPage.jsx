import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_SETTINGS } from './CheckoutPage.gql';
import { Checkout } from '../Checkout';
import { Layout } from '../Layout';
import { Markdown } from '../Markdown';
import { Section } from '../Section';

export const CheckoutPage = () => {
  const {
    data: { allSettings: [{ checkoutHeader = '' } = {}] = [] } = {},
  } = useQuery(GET_ALL_SETTINGS);

  return (
    <Layout>
      <Section>
        <Markdown>{checkoutHeader}</Markdown>
      </Section>
      <Section>
        <Checkout />
      </Section>
    </Layout>
  );
};
