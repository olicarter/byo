import { gql } from '@apollo/client';

import { User } from '../../fragments';

export const GET_SETTINGS = gql`
  query BasketGetSettings {
    allSettings {
      minOrderValue
    }
  }
`;

export const GET_USERS_BY_NETLIFY_ID = gql`
  query BasketGetUsersByNetlifyId($netlifyId: String!) {
    allUsers(where: { netlifyId: $netlifyId }) {
      ...User
    }
  }
  ${User}
`;
