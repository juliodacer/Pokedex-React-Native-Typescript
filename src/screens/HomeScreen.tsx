import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { PokemonCard } from '../components/PokemonCard'

const HomeScreen = () => {

  const { top } = useSafeAreaInsets()
  const { simplePokemonList, loadPokemons } = usePokemonPaginated()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaSize}
      />

      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10
            }}>Pokedex</Text>
          )}
          renderItem={({ item }) => (
            <PokemonCard pokemon={item} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color='gray'
            />
          )}
        />
      </View>
    </>
  )
}

export default HomeScreen