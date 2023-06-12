import React from "react";
import { createNativeStackNavigator } from"@react-navigation/native-stack";
import { HomeScreen } from"../screens/HomeScreen";
import {SettingsScreen} from"../screens/SettingsScreen";

const Root = createNativeStackNavigator();

export function NavigationStack(): JSX.Element{
    return (
        <Root.Navigator> 
            <Root.Screen name ="Home" component={HomeScreen}/>
            <Root.Screen name ="Settings" component={SettingsScreen}/>
        </Root.Navigator>
    )
}