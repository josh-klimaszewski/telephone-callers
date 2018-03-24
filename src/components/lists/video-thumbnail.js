import React from 'react';
import YoutubeThumbnail from 'youtube-thumbnail';

const VideoThumbnail = ({videoUrl, onVideoSelect}) => {
    const thumbnail = YoutubeThumbnail(videoUrl);
    return (
        <div >
            <img 
            onClick={() => onVideoSelect(videoUrl)}
            src={thumbnail.default.url}
            width={thumbnail.default.width}
            height={thumbnail.default.height}
            alt=''
             />
        </div>
    );
}
export default VideoThumbnail;