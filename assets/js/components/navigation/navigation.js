import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const Navigation = (props) => {
    return (
        <div className="navigation card">
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/kismet'>Kismet</Link></div>
            <div><Link to='/lexemes'>Lexemes</Link></div>
            <div><Link to='/xkcdPassword'>xkcd Password</Link></div>
        </div>
    );
};

export default Navigation;
