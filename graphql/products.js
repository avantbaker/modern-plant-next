

export const ALL_PRODUCTS_QUERY = `
  query($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          productType
          description
          title
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          onlineStoreUrl
          totalInventory
          handle
          images(first: 10) {
            edges {
              node {
                id
                originalSrc
                altText
              }
            }
          }
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
    totalInventory
    productType
    priceRange {
      maxVariantPrice {
        amount
      }
      minVariantPrice {
        amount
      }
    }
    images(first: 10) {
      edges {
        node {
          id
          originalSrc
          altText
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }
`