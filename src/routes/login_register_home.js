import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LoginPage from './../screens/login'
import RegisterPAge from './../screens/register'
import HomePage from './../screens/home'

const mainStack = createAppContainer(createStackNavigator(

    {
        login: LoginPage,
        register: RegisterPAge,
        home: HomePage


    },
    {
        initialRouteName: 'login',
        headerMode: "none"
    }


))

export default mainStack