import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../navigator/Navigator'
import { NavigationContainer } from '@react-navigation/native';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> { 

}

const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color }}>{simplePokemon.name} - {color}</Text>
    </View>
  )
}

export default PokemonScreen