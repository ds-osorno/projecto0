import React from "react";
import { View, Text, Button,SafeAreaView,StyleSheet, Platform, StatusBar  } from"react-native";
import 'react-native-gesture-handler';
import type { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

 
export function HomeScreen({navigation}: StackScreenProps<RootStackParamList, "Home">): JSX.Element{
    const goToSettings = () => {
        navigation.navigate("Settings");
    }

    const styles = StyleSheet.create({
        AndroidSafeArea: {
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },});

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Text>This is homeScreen</Text>
            
            <Button onPress = {goToSettings} title="Go to settings"/>
        </SafeAreaView>   
    )
}