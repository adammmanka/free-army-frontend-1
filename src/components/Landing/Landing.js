import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Landing.css';
import Header from './Header';
import AboutUs from "./AboutUs";

const Landing = props => {
    const { history } = props;
    if (localStorage.getItem('user') != null) {
        history.push('/dashboard');
    }
    return (
        <>
            <Header/>
            <AboutUs/>
        </>
    );
}

Landing.propTypes = {
    history: PropTypes.object
};

export default Landing;