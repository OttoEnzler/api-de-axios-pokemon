import React, {useState} from 'react';
import axios from 'axios';


const FetchPokemon = () =>{
    const [responseData, setResponseData] = useState(null);
    const [isFetched, setIsFetched] = useState(false);

    const fetchPokemon = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res=>{
            setResponseData(res.data.results);
            setIsFetched(true);
        })
        .catch(err => {
            console.log(err)
        })
    };
    const showPokemons = () => {
        return(
            responseData.map((pokemon, index) =>{
                return(
                    <li key={index}>{pokemon.name}</li>
                )
            })
        );
    }
    return(
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {isFetched && showPokemons()}
            </ul>
        </div>
    )
}
export default FetchPokemon;