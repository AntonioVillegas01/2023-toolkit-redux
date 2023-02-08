import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPokemons, IPokemon} from "./store/slices/pokemon";
import {RootState} from "./store";

const PokemonApp = () => {

    const {isLoading, pokemons=[], page} = useSelector((state:RootState) => state.pokemon)
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getPokemons(page))
    }, []);


    console.log(pokemons)

    return (
        <>
            <h1>Pokemon App</h1>
            <hr/>
            <span>Loading { isLoading ? 'True': 'False'}</span>
            <ul>
                {pokemons.map((pokemon:IPokemon) => (
                    <li key={pokemon.name  }>{pokemon.name}</li>
                ))}
            </ul>
            <button
                disabled={isLoading}
            { /*@ts-ignore*/ }
                onClick={()=> dispatch(getPokemons(page))}
            >
                Next
            </button>
        </>
    );
};

export default PokemonApp;
