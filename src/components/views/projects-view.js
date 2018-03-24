import React from 'react';

const ProjectsView = ({selectedProject}) => {
    console.log(selectedProject)
    const imageUrl = selectedProject.imageUrl;
    const name = selectedProject.name;
    const src = selectedProject.src;
    const url = `https://bandcamp.com/EmbeddedPlayer/album=${src}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/`;
    return (
        <div className="projects-view">
            {/* <img src={imageUrl} /> */}
            <iframe src={url} seamless>{name} by Telephone Callers</iframe>
        </div>
    );
}
export default ProjectsView;

