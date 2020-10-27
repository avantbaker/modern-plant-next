import { buildSchema } from 'graphql';

export const CUSTOMER_CREATE_MUTATION = `
  mutation($firstName: String, $lastName: String, $email: String!, $phone: String, $password: String!, $acceptsMarketing: Boolean) {
    customerCreate(input: { firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, password: $password, acceptsMarketing: $acceptsMarketing }) {
      customer {
        id
        createdAt
        firstName
        lastName
        email
        password
        phone
        orders(first: 10) {
          edges {
            node {
              id
              orderNumber
              customerUrl
              statusUrl
            }
          }
        }
      }
    }
  }
`
export const CUSTOMER_QUERY = `
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      createdAt
      firstName
      lastName
      email
      phone
    }
  }
` 

export const CUSTOMER_TOKEN_CREATE_MUTATION = `
  mutation($password: String!, $email: String!) {
    customerAccessTokenCreate(input: { password: $password, email: $email }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        message
      }
    }
  }
`

export const CUSTOMER_TOKEN_DELETE_MUTATION = `
  mutation($customerAccessToken: String!) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      deletedAccessToken
      userErrors {
        message
      }
    }
  }
`

export const CUSTOMER_RECOVER_MUTATION = `
  mutation($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        message
      }
    }
  }
`

export const CUSTOMER_UPDATE_MUTATION = `
  mutation($customerAccessToken: String!, $firstName: String, $lastName: String, $email: String) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: { firstName: $firstName, lastName: $lastName, email: $email }) {
      customer {
        firstName
        lastName
        email
      }
    }
  }
`