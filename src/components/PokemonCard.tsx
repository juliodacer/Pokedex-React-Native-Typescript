import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage'
import { useNavigation } from '@react-navigation/native'
import PokemonScreen from '../screens/PokemonScreen';
// import ImageColors from 'react-native-image-colors'

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('gray')
    const navigation = useNavigation()

    useEffect(() => {
        // ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
        //     .then(colors => {
        //         (colors.platform === 'android') ?
        //             setBgColor(colors.dominant || 'grey')
        //             :
        //             setBgColor('grey')
        //     })
    }, [])

    return (
        <TouchableOpacity
            onPress={
                () => navigation.navigate('PokemonScreen', {
                    simplePokemon: pokemon,
                    color: bgColor
                })}
            activeOpacity={0.5}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
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
        height: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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