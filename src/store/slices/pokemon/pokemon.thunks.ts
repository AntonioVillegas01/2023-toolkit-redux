import {setPokemons, startLoadingPokemons} from "./pokemon.slice";
import {pokemonApi} from "../../../api/pokemon.api";



export const getPokemons = (page=0) => {
    // getState obtiene  el estate actual del store
    return  async (
        dispatch: any,
        getState: any )=> {
        dispatch(startLoadingPokemons())

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page *10}`)


        dispatch(setPokemons({
            pokemons: data.results,
            page: page + 1
        }));
    }
}