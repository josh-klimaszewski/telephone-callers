import React from 'react';
const ProjectThumbnail = ({imageUrl, project, onProjectSelect}) => {
    return (
        <img 
        className="project-thumb" 
        onClick={() => onProjectSelect(project)} 
        src={imageUrl} 
        alt=''  />
    );
}
export default ProjectThumbnail;