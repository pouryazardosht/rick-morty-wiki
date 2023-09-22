import React from 'react';
import '../Assets/Sass/Header.scss'
import { Link } from 'react-router-dom';
const Header = () => {
    return (

        <section className='section'>
            <header className='header'>
                <Link to='/' className='title'>
                    Rick & Morty Wiki
                </Link>
            </header>
        </section>
    );
};

export default Header;