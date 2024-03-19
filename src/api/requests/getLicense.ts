/* eslint-disable consistent-return */
import { useState } from 'react';
import { ItemTexturesObjects, ObjForRequest } from '../../types';

export const useGetCoupons = () => {
  const [coupons, setCoupons] = useState<ItemTexturesObjects[]>([]);

  const getCoupons = async () => {
    const obj: ObjForRequest = {
      action: 'getTexturesList',
      page: 1,
      page_size: 10,
      filter: {
        SECTION_CODE: 'coupons',
      },
    };

    const regex = /\d+/g;
    // setCoupons(response.LIST.sort((a, b) => a.NAME.match(regex)[1] - b.NAME.match(regex)[1]));
  };

  return {
    coupons,
    getCoupons,
  };
};

export type Product = {
  PRODUCT_ID: number;
  NAME: string;
  PRICE: string;
  QUANTITY: number;
};

interface ObjOrder {
  action: string;
  order_type: string;
  email: string;
  cart: {
    products: Product[];
    services: [];
  };
}

export const useMakeOrder = () => {
  const makeOrder = async (product: Product, email: string) => {
    // смена платёжной системы

    // const objPaymentRes = {
    //   action: 'Order.changePaymentSystem',
    //   orderID: response.ID,
    //   paymentID: response.TRANSACTIONS[0].PAYMENT_ID,
    //   paymentSystem: 4,
    // };
    // const responsePaymentRes = await resRequest(objPaymentRes);
    // if (
    //   !responsePaymentRes ||
    //   responsePaymentRes.error ||
    //   responsePaymentRes.ERROR ||
    //   !responsePaymentRes.RESULT
    // ) {
    //   return;
    // }

    // window.open(
    //   `https://node49700-env-3541556.jcloud.kz/pay.php?ORDER_ID=${response.ID}&PAYMENT_ID=${response.TRANSACTIONS[0].PAYMENT_ID}&AMOUNT=${response.TRANSACTIONS[0].SUM}&CURRENCY=USD`,
    //   '_self',
    // );

    // const url = `https://node49700-env-3541556.jcloud.kz/pay.php?ORDER_ID=${response.ID}&PAYMENT_ID=${response.TRANSACTIONS[0].PAYMENT_ID}&AMOUNT=${response.TRANSACTIONS[0].SUM}&CURRENCY=USD`;
    // return url;
    return '';
  };

  return {
    makeOrder,
  };
};
