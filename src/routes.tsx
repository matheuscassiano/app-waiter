import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Login from './pages/Login'
import MainMenu from './pages/MainMenu'
import Tables from './pages/Tables'
import Menu from './pages/Menu'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="MainMenu" component={MainMenu} />
                <AppStack.Screen name="Tables" component={Tables} />
                <AppStack.Screen name="Menu" component={Menu} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}