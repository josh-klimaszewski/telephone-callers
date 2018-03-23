import React from 'react';
import ProjectsList from './lists/projects-list';
import VideosList from './lists/videos-list';

const ListBox = ({projectsListShow, videosListShow}) => {


    return (
        <div className="list-box">
            {projectsListShow && <ProjectsList />}
            {videosListShow && <VideosList />}
        </div>
    );
}
export default ListBox;