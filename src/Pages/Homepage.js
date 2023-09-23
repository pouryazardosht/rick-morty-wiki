import React from 'react';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import useTitle from '../Hooks/useTitle';
import Footer from '../Components/Footer';


const Homepage = () => {
    useTitle('Rick & Morty Wiki');
    return (
        <div>
            <Header />
            <Cards />
            <Footer />
        </div>
    );
};

export default Homepage;