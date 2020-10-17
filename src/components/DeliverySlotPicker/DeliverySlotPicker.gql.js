import { gql } from '@apollo/client';

import { DeliverySlot, Order, User } from '../../fragments';

export const GET_DELIVERY_SLOTS = gql`
  query DeliverySlotPickerGetDeliverySlots {
    allDeliverySlots {
      ...DeliverySlot
    }
  }
  ${DeliverySlot}
`;

export const GET_USER = gql`
  query DeliverySlotPickerGetUser($netlifyId: String!) {
    allUsers(where: { netlifyId: $netlifyId }) {
      ...User
    }
  }
  ${User}
`;

export const SET_ORDER_DELIVERY_SLOT = gql`
  mutation DeliverySlotPickerUpdateOrder($id: ID!, $deliverySlotId: ID!) {
    updateOrder(
      id: $id
      data: { deliverySlot: { connect: { id: $deliverySlotId } } }
    ) {
      ...Order
    }
  }
  ${Order}
`;