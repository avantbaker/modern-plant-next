import React, { createContext } from 'react';

const defaults = {
  checkout: null,
};

export const AppContext = createContext(defaults);

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: null,
    }
    this.updateContext = this.updateContext.bind(this);
  }

  updateContext(key, val) {
 
    this.setState({ [key]: val });
  }


  render() {
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