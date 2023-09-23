import React, { useEffect, useState } from 'react';
import '../Assets/Sass/Header.scss'
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult';
import axios from 'axios';
import { v4 } from 'uuid';
const API_KEY = "https://rickandmortyapi.com/api/character";

const Header = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(API_KEY)
            .then((res) => {
                setData(res.data.results)
            })
    }, []);

    return (
        <section className='section' >
            <header className='header'>
                <Link to='/' className='title'>
                    Rick & Morty Wiki
                </Link>
                <div>
                    <div className='d-flex align-items-center gap-2'>
                        <input
                            placeholder='Find Character...'
                            type="text"
                            data-bs-toggle="dropdown"
                            onChange={e => setSearch(e.target.value)} />
                        <div className='dropdown'>
                            <ul className="dropdown-menu">
                                {data.length ? data.map(e => (
                                    <SearchResult key={v4()} id={e.id} name={e.name} image={e.image} />
                                )) : <div className="loader"></div>}
                            </ul>
                        </div>
                        <a
                            className='d-flex align-items-center'
                            target="_blank" rel='noreferrer'
                            href="https://github.com/pouryazardosht/rick-morty-wiki">
                            <i className='github-icon bx bxl-github'></i>
                        </a>
                    </div>

                </div>

            </header>
        </section>
    );
};

export default Header;