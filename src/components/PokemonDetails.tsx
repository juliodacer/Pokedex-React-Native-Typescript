import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { PokemonFull } from "../interfaces/pokemonInterfaces"
import { FadeInImage } from "./FadeInImage"

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ ...StyleSheet.absoluteFillObject }}>
            <View
                style={{
                    ...styles.container,
                    marginTop: 380
                }}
            >
                <Text style={styles.title} >Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text key={type.name} style={{ ...styles.regularText, marginRight: 10 }}>{type.name}</Text>
                        ))
                    }
                </View>
            </View>

            <View style={
                styles.container
            }>
                <Text style={styles.title}>Preso</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>
            </View>

            <View style={
                styles.container
            }>
                <Text style={styles.title}>Sprites</Text>
            </View>

            {/* <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            > */}
            <View style={{ ...styles.container, flexDirection: 'row', justifyContent: 'space-between' }}>
                <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
                <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprite} />
                <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprite} />
                <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprite} />
            </View>

            <View
                style={{
                    ...styles.container,
                }}
            >
                <Text style={styles.title} >Habilidad base</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text key={ability.name} style={{ ...styles.regularText, marginRight: 10 }}>{ability.name}</Text>
                        ))
                    }
                </View>
            </View>

            <View
                style={{
                    ...styles.container,
                }}
            >
                <Text style={styles.title} >Movimientos</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text key={move.name} style={{ ...styles.regularText, marginRight: 10 }}>{move.name}</Text>
                        ))
                    }
                </View>
            </View>

            <View
                style={{
                    ...styles.container,
                }}
            >
                <Text style={styles.title} >Stats</Text>
                <View style={{ flexWrap: 'wrap' }}>
                    {
                        pokemon.stats.map((stats, i) => (
                            <View key={stats.stat.name + i} style={{ flexDirection: 'row' }}>
                                <Text style={{ ...styles.regularText, marginRight: 10, width: 170 }}>{stats.stat.name}</Text>
                                <Text style={{ ...styles.regularText, marginRight: 10, fontWeight: 'bold' }}>{stats.base_stat}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>

            <View
                style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}
            >
                <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.front_default} />
            </View>

            {/* </ScrollView> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 17
    },
    basicSprite: {
        height: 70,
        width: 70
    }

})