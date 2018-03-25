import React from 'react';

const NavBar = ({onHomeClick, onProjectsClick, onVideosClick}) => {
    
    return (
        
        <div className="nav-bar">
            <div onClick={() => onHomeClick()}>Home</div>
            <div className="nav-line"></div>
            <div onClick={() => onProjectsClick()}>Projects</div>
            <div className="nav-line"></div>
            <div onClick={() => onVideosClick()}>Videos</div>
        </div>
    );
    
}

export default NavBar;