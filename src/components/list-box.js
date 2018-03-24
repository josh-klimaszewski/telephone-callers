import React from 'react';
import ProjectsList from './lists/projects-list';
import VideosList from './lists/videos-list';

const ListBox = ({projectsListShow, videosListShow, onVideoSelect}, props) => {


    return (
        <div className="list-box">
            {projectsListShow && <ProjectsList />}
            {videosListShow && <VideosList 
                
                onVideoSelect={props.onVideoSelect}
            />}
        </div>
    );
}
export default ListBox;