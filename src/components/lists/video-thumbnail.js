import React from 'react';
import YoutubeThumbnail from 'youtube-thumbnail';

const VideoThumbnail = ({videoUrl, onVideoSelect}) => {
    const thumbnail = YoutubeThumbnail(videoUrl);
    return (
        <div >
            <img 
            onClick={() => onVideoSelect(videoUrl)}
            src={thumbnail.default.url}
            width="100px"
            height="100px"
            alt=''
             />
        </div>
    );
}
export default VideoThumbnail;