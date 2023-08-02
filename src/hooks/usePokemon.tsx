import { useEffect, useState } from "react"
import { PokemonFull } from "../interfaces/pokemonInterfaces";
import { pokemonApi } from "../api/pokemonApi";


export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)

    const uri = `https://pokeapi.co/api/v2/pokemon/${id}`

    const loadPokemon = async () => {
        const resp = await pokemonApi.get<PokemonFull>(uri)
        setPokemon(resp.data)
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        isLoading, loadPokemon, pokemon
    }
}

