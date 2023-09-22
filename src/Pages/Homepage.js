import React from 'react';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import useTitle from '../Hooks/useTitle';


const Homepage = () => {
    useTitle('Rick & Morty Wiki');
    return (
        <div>
            <Header />
            <Cards />
        </div>
    );
};

export default Homepage;