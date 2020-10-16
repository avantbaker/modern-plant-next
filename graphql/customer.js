export const CUSTOMER_CREATE_MUTATION = `
  mutation($firstName: String, $lastName: String, $email: String!, $phone: String, $password: String!, $acceptsMarketing: Boolean) {
    customerCreate(input: { firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, password: $password, acceptsMarketing: $acceptsMarketing }) {
      customer {
        id
        createdAt
        firstName
        lastName
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