import React, { useEffect, useState } from 'react';

const Staff = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            setPokemons(data.results); // [{},{},{},{},{}]
        }
        getPokemons();
    }, []);

    return (
        <section>
            <ul>
                {pokemons.length ? pokemons.map(pokemon => <li>{pokemon.name}</li>) : null}
            </ul>
        </section>

    );

}

export default Staff