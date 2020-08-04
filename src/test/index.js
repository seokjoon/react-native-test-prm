import React, { Component, Fragment } from 'react'

import { AppState, Button, Modal, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

class Index extends Component {
  constructor () {
    super()
  }

  state = {
    appState: AppState.currentState,
  }

  componentDidMount () {
    AppState.addEventListener('change', this.reload)
  }

  componentWillUnmount () {
    AppState.removeEventListener('change', this.reload)
  }

  params = () => {
    const date = Math.floor(new Date().getTime() / 1000);
    return `
      document.appUserPlusId = 't_plusId_${date}'; 
      document.appUserName = 't_user_${date}'; 
      document.appVehicleNumId = 't_numId_${date}';
      document.appVehicleNumReg = 't_numReg_${date}';
      true;
    `
  };

  reload = nextAppState => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') this.webview.reload()
    this.setState({ appState: nextAppState })
  }

  render () {
    const outs = (
      <Fragment>
        <WebView
          //source={{uri: 'https://prime.epikar.com/app'}}
          source={{uri: 'https://prime.bmw-plus.co.kr/app/plus.html'}}
          //source={{uri: 'http://192.168.0.2:8081'}}
          //source={{uri: 'http://192.168.1.4:8082'}}
          // style={{marginTop: 20}}
          ref={r => (this.webview = r)}
          injectedJavaScript={this.params()}
          key={this.state.appState}
          // onNavigationStateChange={() => { alert('change'); }}
        />
      </Fragment>
    )

    return (<Fragment>{outs}</Fragment>)
  }
}

export default Index
