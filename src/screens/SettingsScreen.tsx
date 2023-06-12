import React from "react";
import { View, Text, Button, SafeAreaView,StyleSheet, Platform, StatusBar } from"react-native";
import 'react-native-gesture-handler';
import type { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

export function SettingsScreen({navigation}: StackScreenProps<RootStackParamList, "Settings">): JSX.Element{
    const goToHome = () => {
        navigation.navigate("Home");
    }

    const styles = StyleSheet.create({
        AndroidSafeArea: {
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },});


    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Text>This is SettingsHome</Text>           
            <Button onPress = {goToHome} title="Go to home"/>
        </SafeAreaView>   
    )

    
    
}