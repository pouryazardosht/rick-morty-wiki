import React from "react";
import '../Assets/Sass/Card.scss'
import { Link } from "react-router-dom";
import statusBar from "../Hooks/useStatus";
import speciesBar from "../Hooks/useSpecies";
const Card = (props) => {

    return (
        <Link to={`/characters/${props.id}`}>
            <section className="card-box">
                <img src={props.image} alt="character pic" />
                <h1>{props.name}</h1>
                <p> Status : <span className={statusBar(props.status)} >{props.status}</span></p>
                <p> Specie : <span className={speciesBar(props.species)}>{props.species}</span></p>
            </section>
        </Link>
    )
}
    ;

export default Card;
