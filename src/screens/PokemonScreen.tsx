import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../navigator/Navigator'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params
  const { id, name, picture } = simplePokemon
  const { top } = useSafeAreaInsets()

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ ...styles.headerContainter, backgroundColor: color }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 5,
            // marginTop: 30
          }}
        >
          <Icon name='arrowleft' size={30} color={'#fff'} />
        </TouchableOpacity>
        <Text style={{ ...styles.pokemonName, top: top + 30 }}>
          {name + '\n'}#{id}
        </Text>
        <Image
          style={styles.pokebola}
          source={require('../assets/pokebola-blanca.png')} />
        <FadeInImage
          style={styles.pokemonImage}
          uri={picture}
        />
      </View>
      <View
        style={styles.indicator}
      >
        <ActivityIndicator
          color={color}
          size={35}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainter: {
    height: 370,
    alignItems: 'center',
    zIndex: 999,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    color: '#fff',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokebola: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.4
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -20
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})