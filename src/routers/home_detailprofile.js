import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Icon from 'react-native-vector-icons/FontAwesome'
import explore from '../screens/explore'
import postImage from '../screens/postImage'
import editProfile from '../screens/editProfile'
import ProfileDetail from '../screens/profileDetail'
import { createStackNavigator } from 'react-navigation-stack'
import Settingprofile from '../screens/settingprofile'


// const Home_to_Profile = createAppContainer(createStackNavigator({
//     home: Home,
//     detail: ProfileDetail
// }, {
//     headerMode: "none"
// }))

const profile_to_setting = createAppContainer(createStackNavigator({
    profile: ProfileDetail,
    setting: Settingprofile
}, {
    headerMode: "none"
}))


// createStackNavigator = hanya redirect
// createMaterialTopTabNavigator = redirect + tampilan 

const HomeDetailProfile = createAppContainer(createMaterialTopTabNavigator(
    {
        // home: {
        //     screen: Home_to_Profile,
        //     navigationOptions: {
        //         tabBarIcon: <Icon name='home' size={24} />
        //     }
        // },
        // explore: {
        //     screen: explore,
        //     navigationOptions: {
        //         tabBarIcon: <Icon name='search' size={24} />
        //     }
        // },
        // post: {
        //     screen: postImage,
        //     navigationOptions: {
        //         tabBarIcon: <Icon name='plus' size={24} />
        //     }
        // },
        editProfile: {
            screen: profile_to_setting,
            navigationOptions: {
                tabBarIcon: <Icon name='user' size={24} />
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            indicatorStyle: { position: 'absolute', top: 0, backgroundColor: 'black' },
            style: { backgroundColor: "white", borderTopWidth: 0.8, borderTopColor: 'gray' }
        }
    }

))

export default HomeDetailProfile;