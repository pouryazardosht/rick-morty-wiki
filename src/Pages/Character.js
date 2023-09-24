import Header from '../Components/Header';
import '../Assets/Sass/Character.scss'


import React, { useEffect, useState } from 'react';
import CharacterCard from '../Components/CharacterCard';
import axios from 'axios';
import useTitle from '../Hooks/useTitle';
import { useParams } from 'react-router-dom';
const API_KEY_CHARACHTER = 'https://rickandmortyapi.com/api/character';

const Character = () => {
    const params = useParams();
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios.get(`${API_KEY_CHARACHTER}/${params.id}`)
            .then(res => {
                setCharacter(res.data);
            })
        // eslint-disable-next-line
    }, [])
    const { name, image, gender, species, status } = character;
    useTitle(`${name} #${params.id}`);
    return (
        <>
            <Header />
            <CharacterCard
                name={name}
                image={image}
                gender={gender}
                species={species}
                status={status}

            />
        </>
    );
}
    ;

export default Character;