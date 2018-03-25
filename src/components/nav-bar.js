import React from 'react';

const NavBar = ({onHomeClick, onProjectsClick, onVideosClick}) => {
    
    return (
        
        <div className="nav-bar">
            <div 
                className="nav-button" 
                onClick={() => onHomeClick()}>
                <h2>Home</h2>
            </div>
            <div className="nav-line"></div>
            <div 
                className="nav-button" 
                onClick={() => onProjectsClick()}>
                <h2>Projects</h2>
            </div>
            <div className="nav-line"></div>
            <div 
                className="nav-button" 
                onClick={() => onVideosClick()}>
                <h2>Videos</h2>
            </div>
        </div>
    );
    
}

export default NavBar;