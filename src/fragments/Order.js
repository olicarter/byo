import { gql } from '@apollo/client';

import { Address } from './Address';
import { DeliverySlot } from './DeliverySlot';
import { OrderItems } from './OrderItems';

export const Order = gql`
  fragment Order on Order {
    id
    address {
      ...Address
    }
    createdAt
    deliverySlot {
      ...DeliverySlot
    }
    ...OrderItems
    paid
    submitted
  }
  ${Address}
  ${DeliverySlot}
  ${OrderItems}
`;
