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
    const [filteredUsers, setFilteredUsers] = useState([]);
    const searchHandler = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);
        const filteredItems = data.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filteredItems);
    }
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
                            onChange={searchHandler}
                            value={search} />
                        <div className='dropdown'>
                            <ul className="dropdown-menu">
                                {search ? filteredUsers.map(e => (
                                    <SearchResult key={v4()} id={e.id} name={e.name} image={e.image} />
                                )) : data.length ? data.map(e => (
                                    <SearchResult key={v4()} id={e.id} name={e.name} image={e.image} />
                                )
                                ) : <div>not found</div>}
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