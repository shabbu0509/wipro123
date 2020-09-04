/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Main from './src/Main'
import store from "./src/config/store";

/**
* @returns {object}
*/
const persist = store();

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={persist.store}>
        <PersistGate loading={null} persistor={persist.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    )
  }
}

export { App, persist };
