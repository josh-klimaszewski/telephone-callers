import React from 'react';
import VideoThumbnail from './video-thumbnail';

const VideosList = ({onVideoSelect}) => {
    const videoUrls = [
        'https://www.youtube.com/watch?v=aehA_6-NMm0',
        'https://www.youtube.com/watch?v=fBTScNOALps',
        'https://www.youtube.com/watch?v=le4QjgwfbvA&t=7s',
        'https://www.youtube.com/watch?v=EzkidNfQaRE&t=2s',
        'https://www.youtube.com/watch?v=83KHQ7AtSgQ'
    ];
    const videos = videoUrls.map((videoUrl) => {
        return (
            <VideoThumbnail
                videoUrl={videoUrl}
                key={videoUrl}
                onVideoSelect={onVideoSelect}
             />
        );
    });
    
    return (
        <div className="videos-list">
            {videos}
        </div>
    );
}
export default VideosList;