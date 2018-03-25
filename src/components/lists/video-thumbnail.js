import React from 'react';
import YoutubeThumbnail from 'youtube-thumbnail';

const VideoThumbnail = ({videoUrl, onVideoSelect}) => {
    const thumbnail = YoutubeThumbnail(videoUrl);
    return (
        <img 
        className="video-thumb"
        onClick={() => onVideoSelect(videoUrl)}
        src={thumbnail.default.url}
        width="100px"
        height="100px"
        alt='' />
    );
}
export default VideoThumbnail;