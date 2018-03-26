import React from 'react';

const ProjectsView = ({selectedProject}) => {
    console.log(selectedProject)
    const name = selectedProject.name;
    const src = selectedProject.src;
    const description = selectedProject.description;
    const url = `https://bandcamp.com/EmbeddedPlayer/album=${src}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/`;
    return ( 
        <div className="projects-view"> 
            <iframe 
            title="bandcamp-embed"
            className="bandcamp-embed"
            src={url} 
            seamless>
            </iframe>
            <div className="projects-info">
            <h2>{name}</h2>
            <h3>{description}</h3>
            </div>
        </div>
        
    );
}
export default ProjectsView;

