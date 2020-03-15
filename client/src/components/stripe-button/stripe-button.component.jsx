import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_vZ2RCIUtfAgX8H9Wr1OhNE2l00ZnrpRnFW';

  const onToken = token => {
      axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token
          }
      })
        .then( response => {
          alert('Payment success');
        })
        .catch( error => {
          console.log(error);
          alert('there is an issus');
        })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;