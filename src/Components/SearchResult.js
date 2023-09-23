import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Sass/SearchResult.scss'
const SearchResult = (props) => {
    return (
        <li>
            <Link className="dropdown-item" to={`/characters/${props.id}`}>
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
            </Link>
        </li>
    );
};

export default SearchResult;