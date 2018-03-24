import React from 'react';
import ProjectsList from './lists/projects-list';
import VideosList from './lists/videos-list';

const ListBox = ({projectsListShow, videosListShow, onVideoSelect, onProjectSelect}) => {

    return (
        <div className="list-box">
            {projectsListShow && <ProjectsList onProjectSelect={onProjectSelect}/>}
            {videosListShow && <VideosList onVideoSelect={onVideoSelect} />}
        </div>
    );
}
export default ListBox;