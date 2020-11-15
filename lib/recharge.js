import _axios from "axios";
// todo: add in recharge api key
const RECHARGE_TOKEN='_add_recharge_api_key';
const SERVER_URL = `https://api.rechargeapps.com`;

const recharge = async (rechargeAddressID, productID) => {
  let data = {
    "address_id": rechargeAddressID,
    "next_charge_scheduled_at":"2020-12-15",
    "quantity": 1,
    "shopify_variant_id": productID,
    "order_interval_unit":"day",
    "order_interval_frequency":"15",
    "charge_interval_frequency":"30",
  }

  try {
    const response = await _axios({
      url: `${SERVER_URL}/subscriptions`,
      method: 'post',
      data: JSON.stringify(data),
      headers: {
        'X-Recharge-Access-Token': `${RECHARGE_TOKEN}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    });

    return response && response.data;
  } catch (error) {
    if (error && error.message) {
      return { errors: [{ message: error.message }] };
    }

    return { errors: [{ message: "An unknown error has occurred" }] };
  }
};


const createSubscription = async (productID) => {
  const decodedId = window.atob(productID);
  const id = decodedId.split('/')[4];

  const addressID = 57178309;
  try {
    const res = await recharge(addressID, id);

    return res;
  } catch (error) {
    console.log('error', error);

    return error;
  }

}

export { createSubscription };