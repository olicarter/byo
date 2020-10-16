import React from 'react';
import { Link, Route } from 'react-router-dom';

import { useAuth } from '../../contexts';
import * as Styled from './App.styled';
import { Basket } from '../Basket';
import { Button } from '../Button';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { Layout } from '../Layout';
import { LogoutButton } from '../LogoutButton';
import { Products } from '../Products';
import { Section } from '../Section';
import { TopBar } from '../TopBar';
import { UserSubmittedOrders } from '../UserSubmittedOrders';
import { Title } from '../Typography';

export const App = () => {
  const { isAuthenticated, openLoginModal } = useAuth();

  return (
    <Styled.App>
      <TopBar />

      <Styled.Main>
        <Route exact path="/">
          <Layout center>
            <Home />
          </Layout>
        </Route>

        <Route path="/account">
          <Layout>
            <Section>
              <Title>Account</Title>
            </Section>
            {isAuthenticated ? (
              <>
                <Section>
                  <UserSubmittedOrders />
                </Section>
                <Section>
                  <LogoutButton />
                </Section>
              </>
            ) : (
              <Button onClick={openLoginModal}>Log in</Button>
            )}
          </Layout>
        </Route>

        <Route path="/products">
          <Layout>
            <Section>
              <Title>Products</Title>
            </Section>
            <Section>
              <Products />
            </Section>
          </Layout>
        </Route>

        <Route path="/basket">
          <Layout>
            <Section>
              <Title>Checkout</Title>
            </Section>
            <Section>
              <Basket />
            </Section>
          </Layout>
        </Route>
      </Styled.Main>

      <Footer />
    </Styled.App>
  );
};
