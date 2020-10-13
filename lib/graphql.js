import _axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const SERVER_URL = `https://${process.env.SHOPIFY_DOMAIN}/api/2020-10/graphql`;

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
          'X-Shopify-Storefront-Access-Token': `${process.env.SHOPIFY_ACCESS_TOKEN}`,
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