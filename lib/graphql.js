import _axios from "axios";

const SHOPIFY_DOMAIN='themodernplant.myshopify.com';
const SHOPIFY_ACCESS_TOKEN='da9c055ea9a1e92f3851099bae4f6eec';

const SERVER_URL = `https://${SHOPIFY_DOMAIN}/api/2020-10/graphql`;

export const axios = _axios.create({
  baseURL: SERVER_URL,
});

const graphQuery = async (query, variables = {}) => {
  try {
    const response = await _axios.post(
      SERVER_URL,
      {
        query: query,
        ...(variables && { variables }),
      },
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': `${SHOPIFY_ACCESS_TOKEN}`,
          'Accept': 'application/json',
        },
      }
    );

    return response && response.data;
  } catch (error) {
    if (error && error.message) {
      return { errors: [{ message: error.message }] };
    }

    return { errors: [{ message: "An unknown error has occurred" }] };
  }
};

export default graphQuery;