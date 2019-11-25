import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from './../screens/login'
import Register from './../screens/register'
import Home from './../screens/home'
import MainTab from './home_explore_profile_post'


const MainStack = createAppContainer(createStackNavigator(
    {
        // root : destination screen
        login: Login,
        register: Register,
        // ketika home, redirect ke maintab dari home_explore_profile_post.js
        home: MainTab
    },
    {
        // configuration
        initialRouteName: 'register',
        headerMode: "none"
    }
))


export default MainStack;