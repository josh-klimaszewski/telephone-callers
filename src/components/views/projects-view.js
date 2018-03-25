import React from 'react';

const ProjectsView = ({selectedProject}) => {
    console.log(selectedProject)
    
    const src = selectedProject.src;
    const url = `https://bandcamp.com/EmbeddedPlayer/album=${src}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/`;
    return (  
        <iframe 
        className="projects-view"
        src={url} 
        seamless></iframe>
        
    );
}
export default ProjectsView;

