import React from 'react';
import useStatus from '../Hooks/useStatus';
import useSpecies from '../Hooks/useSpecies';
import useGender from '../Hooks/useGender';
import '../Assets/Sass/Character.scss'


const CharacterCard = (props) => {
    const { name, image, gender, species, status, } = props;

    return (
        <div>
            <section className='card-info-container'>
                <div className='character-info'>
                    <div className='name-card'>
                        <img src={image} alt="characterimage" />
                        <div className="personal-info">
                            <h2>{name}</h2>
                            <div className='more-card'>
                                <p> Status : <span className={useStatus(status)} >{status}</span></p>
                                <p> Specie : <span className={useSpecies(species)}>{species}</span></p>
                                <p> Gender : <span className={useGender(gender)}>{gender}</span></p>
                            </div>
                        </div>
                        <div className="personal-info">
                            <h2>More Information</h2>
                            <div className='more-card'>
                                <p> Origin : <span></span></p>
                                <p> Location : <span></span></p>
                                <p> Episodes : <span></span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CharacterCard;