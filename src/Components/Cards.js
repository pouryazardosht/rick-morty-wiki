import React, { useEffect, useState } from 'react';
import '../Assets/Sass/Cards.scss';
import axios from 'axios';
import Card from './Card';
import NotFound from '../Pages/NotFound';
const API_KEY = "https://rickandmortyapi.com/api/character";
const Cards = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios.get(API_KEY)
            .then(respone => {
                setCharacters(respone.data.results);
            }).catch(err => {
                return <NotFound />
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div className='cardContainer'>
            <div className='containerP'>
                {characters.length ? characters.map(character => (
                    <Card
                        key={character.id}
                        id={character.id}
                        image={character.image}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                    />
                )) : <div className="loader"></div>}
            </div>
        </div>
    );
};

export default Cards;