import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4
            }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        // width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.60,
        elevation: 7,
        // overflow: 'hidden'
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        // opacity: 0.4
    },
    pokebolaContainer: {
        // backgroundColor: 'blue',
        width: 100,
        height: 100,
        bottom: 0,
        right: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0.4
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -8,
        bottom: -5
    }
})