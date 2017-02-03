import React from 'react';
import { Link } from 'react-router';

const Container = ({ children }) => (
    <div>
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/name">Name</Link></li>
                <li><Link to="/about/work">Work</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/portfolio/0">Portfolio #0</Link></li>
                <li><Link to="/portfolio/1">Portfolio #1</Link></li>
            </ul>
        </header>
        <div>
            {children}
        </div>
    </div>
);
export default Container;