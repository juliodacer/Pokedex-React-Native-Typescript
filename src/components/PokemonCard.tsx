import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

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
                        {'\n#' + pokemon.name}
                    </Text>
                </View>
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
        borderRadius: 10
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    }
})