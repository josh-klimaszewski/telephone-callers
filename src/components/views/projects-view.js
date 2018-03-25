import React from 'react';

const ProjectsView = ({selectedProject}) => {
    console.log(selectedProject)
    
    const src = selectedProject.src;
    const url = `https://bandcamp.com/EmbeddedPlayer/album=${src}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/`;
    return (
        <div className="projects-view">
            
            <iframe src={url} seamless></iframe>
        </div>
    );
}
export default ProjectsView;

