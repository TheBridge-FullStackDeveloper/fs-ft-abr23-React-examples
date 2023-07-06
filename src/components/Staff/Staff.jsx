import React, { useEffect, useState } from 'react';

const Staff = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            console.log(data);
            setPokemons(data.results); // [{},{},{},{},{}]
        }
        getPokemons();
    }, []);

    return (
        <section>
            <ul>
                {pokemons.length ? pokemons.map(pokemon => <li className='pokemon'>
                    <p>{pokemon.name}</p>
                    <p></p>
                    </li>) : null}
            </ul>
        </section>

    );

}

export default Staff