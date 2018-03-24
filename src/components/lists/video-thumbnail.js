import React from 'react';
import YoutubeThumbnail from 'youtube-thumbnail';

const VideoThumbnail = ({videoUrl}) => {
    const thumbnail = YoutubeThumbnail(videoUrl);
    return (
        <div >
            <img 
            src={thumbnail.default.url}
            width={thumbnail.default.width}
            height={thumbnail.default.height}
            alt=''
             />
        </div>
    );
}
export default VideoThumbnail;