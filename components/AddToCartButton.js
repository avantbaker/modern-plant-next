import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isServer from '../lib/isServer';

function ShopifyBuyInit(client, productId, quantity = false) {
  const decodedId = window.atob(productId);
  const id = decodedId.split('/')[4];

  client.createComponent('product', {
    id,
    node: document && document.getElementById(`product-component-${productId}`),
    moneyFormat: '%24%7B%7Bamount%7D%7D',
    options: {
    "product": {
      "classes": {
        "myInput": 'shopify-buy__quantity',
        "iFrame": 'shopify-buy-frame',
        "btnWrapper": 'shopify-buy__btn-wrapper',
      },
      "styles": {
        "iFrame": {
          "width": '100%',
        },
        "btnWrapper": {
          "display": "inline-block",
        },
        "myInput": {
          'border': 0,
          ":focus": {
            "border": 0,
            "outline": 0,
          },
        },
        "product": {
          "display": "inline-block",
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "title": {
          "font-family": "muli, sans-serif"
        },
        "button": {
          "font-family": "muli, sans-serif",
          "font-weight": "bold",
          "display": "inline-block",
          "color": "#262b2a",
          "border-radius": "0",
          ":hover": {
            "cursor": "pointer",
            "background-color": "#fff",
          },
          "border": "2px solid #262b2a",
          "background-color": "#fff",
          ":focus": {
            "background-color": "#fff"
          }
        },
        "quantity": {
          "color": "#262b2a",
          "display": "inline-block",
          "max-width": "100px",
          "width": "100%",
          "border-radius": "0",
          "margin-right": "10px !important",
          ":hover": {
            "cursor": "pointer",
            "background-color": "#fff",
          },
          "border": "2px solid #262b2a",
          "background-color": "#fff",
          ":focus": {
            "background-color": "#fff"
          } 
        }
      },
      "contents": {
        "img": false,
        "title": false,
        "quantity": quantity,
        "price": false
      },
      "text": {
        "button": "Add to cart"
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-family": "Montserrat, sans-serif",
          "font-weight": "bold",
          ":hover": {
            "background-color": "#508b8e"
          },
          "background-color": "#599a9e",
          ":focus": {
            "background-color": "#508b8e"
          }
        }
      },
      "googleFonts": [
        "Montserrat"
      ],
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {
      "styles": {
        "label": {
          "font-family": "Montserrat, sans-serif",
          "font-weight": "bold"
        },
        "select": {
          "font-family": "Montserrat, sans-serif",
          "font-weight": "bold"
        }
      },
      "googleFonts": [
        "Montserrat"
      ]
    },
    "cart": {
      "styles": {
        "button": {
          "font-family": "Montserrat, sans-serif",
          "font-weight": "bold",
          ":hover": {
            "background-color": "#508b8e"
          },
          "background-color": "#599a9e",
          ":focus": {
            "background-color": "#508b8e"
          }
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      },
      "popup": false,
      "googleFonts": [
        "Montserrat"
      ]
    },
    "toggle": {
      "styles": {
        "toggle": {
          "font-family": "Montserrat, sans-serif",
          "font-weight": "bold",
          "background-color": "#599a9e",
          ":hover": {
            "background-color": "#508b8e"
          },
          ":focus": {
            "background-color": "#508b8e"
          }
        }
      },
      "googleFonts": [
        "Montserrat"
      ]
    }
    },
  });
}


export default function AddToCartButton({ client, productId, quantity }) {
  if (isServer || !client) {
    return null;
  }
  useEffect(() => {
    if (client) {
      ShopifyBuyInit(client, productId, quantity);
    }
  }, []);

  return (
  <div id={`product-component-${productId}`} />  
  )
}


AddToCartButton.propTypes = {
  productId: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  client: PropTypes.object.isRequired,
};