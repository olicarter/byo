import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useFormContext } from 'react-hook-form';

import { GET_ADDRESS_BY_ID } from './OrderDeliveryAddressPostcodeInput.gql';
import { PostcodeInput } from '../../PostcodeInput';

export const OrderDeliveryAddressPostcodeInput = ({ name = 'postcode' }) => {
  const { setValue, watch } = useFormContext();

  const addressId = watch('address');

  const [
    getAddress,
    { data: { Address } = {} },
  ] = useLazyQuery(GET_ADDRESS_BY_ID, { variables: { id: addressId } });

  const { postcode = '' } = Address || {};

  useEffect(() => {
    getAddress();
  }, [addressId]);

  useEffect(() => {
    setValue(name, postcode);
  }, [postcode]);

  return <PostcodeInput name={name} />;
};
