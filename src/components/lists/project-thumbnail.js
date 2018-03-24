import React from 'react';
const ProjectThumbnail = ({imageUrl, project, onProjectSelect}) => {
    return (
        <div className="project-thumb" onClick={() => onProjectSelect(project)}>
            <img src={imageUrl} alt=''  />
        </div>
        
    );
}
export default ProjectThumbnail;