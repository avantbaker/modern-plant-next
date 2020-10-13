

export const ALL_PRODUCTS_QUERY = `
  query($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          productType
          description
          title
          onlineStoreUrl
          handle
          variants(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_QUERY = `
  query($id: ID!) {
    node(id: $id) {
      ...product
    }
  }

  fragment product on Product {
    id
    description
    title
    onlineStoreUrl
    handle
    productType
    variants(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }
`