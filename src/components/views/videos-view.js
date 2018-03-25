import React from 'react';
import ReactPlayer from 'react-player';

const VideosView = ({selectedVideoUrl}) => {
   
    return (
     <ReactPlayer  
        className="video-player"  
        controls={true} 
        url={selectedVideoUrl} 
     />

    );
}
export default VideosView;