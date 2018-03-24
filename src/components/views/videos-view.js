import React from 'react';
import ReactPlayer from 'react-player';

const VideosView = ({selectedVideoUrl}) => {
    
    return (
        <div className="videos-view">
            <ReactPlayer  className="video-player"width="90%" height="90%" controls="true" url={selectedVideoUrl} />
        </div>
    );
}
export default VideosView;