import React, { Component } from 'react'
import { View } from 'react-native'
import LoginPage from './src/screens/login'
import RegisterPage from './src/screens/register'
import Homepage from './src/screens/home'
import MainStack from './src/routes/login_register_home'

//
export default class App extends Component {


  render() {
    return (
      <MainStack />

    )
  }
}
