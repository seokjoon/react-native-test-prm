import React, {Component} from 'react';

import {WebView} from 'react-native-webview';

class Index extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://prime.epikar.com/app'}}
        // style={{marginTop: 20}}
      />
    );
  }
}

export default Index;
