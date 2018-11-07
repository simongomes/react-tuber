import React from 'react';
import { Media, ListGroupItem } from 'reactstrap';

const VideoListItem = ({ video }) => {
  const videoData = {
    image: video.snippet.thumbnails.default.url,
    title: video.snippet.title,
    description: video.snippet.description
  };
  return (
    <ListGroupItem>
      <Media className="video-list">
        <Media left href="#">
          <img className="media-object" src={videoData.image} alt="" />
        </Media>
        <Media body>
          <Media heading>{videoData.title}</Media>
          {videoData.description}
        </Media>
      </Media>
    </ListGroupItem>
  );
};

export default VideoListItem;
