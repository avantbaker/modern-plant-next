import { buildSchema } from 'graphql';

buildSchema(`
  input CheckoutLineItemInput {
    quantity: Int!
    variantId: ID!
  }
`);

export const CART_CHECKOUT_CREATE_MUTATION = `
  mutation($lineItems: [CheckoutLineItemInput]) {
    checkoutCreate(input: { lineItems: $lineItems }) {
      checkout {
        id
        webUrl
        orderStatusUrl
      }
    }
  }

`

export const CART_ADD_LINE_ITEMS_MUTATION = `
  mutation($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        createdAt
        id
        orderStatusUrl
        webUrl
      }
    }
  }
`

export const CHECKOUT_QUERY = `
  query($id: ID!) {
    node(id: $id) {
      ...checkout
    }
  }

  fragment checkout on Checkout {
    id
    orderStatusUrl
    webUrl
  }
`