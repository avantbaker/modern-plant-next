import isServer from 'lib/isServer';
// import ShopifyBuy from '@shopify/buy-button-js';
import React, { createContext } from 'react';
import dynamic from 'next/dynamic';
// const ShopifyBuy = dynamic(() => import('@shopify/buy-button-js'), { ssr: false });

const defaults = {
  checkout: null,
  shopifyClient: null,
};

export const AppContext = createContext(defaults);

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: null,
      shopifyClient: null,
    }
    this.updateContext = this.updateContext.bind(this);
  }

  async dynamicallyImportPackage() {
    const ShopifyBuy = await import('@shopify/buy-button-js');

    return ShopifyBuy;
  }

  async componentDidMount() {
    if (isServer) {
      return null;
    }
    
    const ShopifyBuy = await this.dynamicallyImportPackage();

    var client = await ShopifyBuy.buildClient({
      domain: 'themodernplant.myshopify.com',
      storefrontAccessToken: '0e62a7702ec254d87ae477adab65aa92',
    });

    const ui = ShopifyBuy.UI.init(client);


    this.setState({ shopifyClient: ui });
  }

  updateContext(key, val) {
 
    this.setState({ [key]: val });
  }


  render() {
    if (isServer) {
      return null;
    }
    const state = this.state;

    const { children } = this.props;
    return (
      <AppContext.Provider value={{ context: state, updateContext: this.updateContext }}>
        {children}
      </AppContext.Provider>
    )
  }

};

export default ContextProvider;