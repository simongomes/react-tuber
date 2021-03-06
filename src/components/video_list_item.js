import React from 'react';
import { Media, ListGroupItem } from 'reactstrap';

const VideoListItem = ({ video, onVideoSelect }) => {
  const videoData = {
    image: video.snippet.thumbnails.default.url,
    title: video.snippet.title,
    description: video.snippet.description
  };

  return (
    <ListGroupItem
      className="video-list-item"
      onClick={() => onVideoSelect(video)}
    >
      <Media className="video-list">
        <Media left href="#">
          <img className="media-object" src={videoData.image} alt="" />
        </Media>
        <Media body>
          <Media heading>{videoData.title}</Media>
        </Media>
      </Media>
    </ListGroupItem>
  );
};

export default VideoListItem;
