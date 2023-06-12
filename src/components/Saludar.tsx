import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  firstname?: string, //Propiedad opcional
  lastname: string,
}

export default function AppScreen({firstname='Pepa', lastname}:Props) {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'black'}}>
        Hola, me llamo: {firstname} {lastname} 
      </Text>
    </View>
  )
}