import React from 'react';
import HomeView from './views/home-view.js';
import ProjectsView from './views/projects-view.js';
import VideosView from './views/videos-view.js';

const ViewBox = ({homeListShow, projectsListShow, videosListShow, selectedVideoUrl, selectedProject}) => {
    
    
    return (
        <div className="view-box">
        {homeListShow && <HomeView  />}
        {projectsListShow && <ProjectsView selectedProject={selectedProject}/>}
        {videosListShow && <VideosView selectedVideoUrl={selectedVideoUrl}/>}
        </div>
    );
}

export default ViewBox;