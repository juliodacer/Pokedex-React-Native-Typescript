import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaSize}
      />
      <Text style={{ 
        ...styles.title, 
        ...styles.globalMargin,
        top: top + 20 
        }}>Pokedex</Text>
    </>
  )
}

export default HomeScreen