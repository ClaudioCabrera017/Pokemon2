import { useState } from 'react';
import axios from 'axios';
const Pokedex2 = () => {
	const [Lista, setLista] = useState([]);

	const fetchPokemon = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000')
			.then(response => response.data)
			.then(response => setLista(response.results))
	};

	return (
        <div>
            <button onClick={fetchPokemon}> Fetch Pokemon</button>
            <ul>
        {Lista.length > 0 && Lista.map((item, index)=>{
        return (<li key={index}>{item.name}</li>)
        })}
        </ul>
    </div>
);
}
export default Pokedex2;
