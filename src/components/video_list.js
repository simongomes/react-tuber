import React from 'react';
import VideoListItem from './video_list_item';
import { ListGroup } from 'reactstrap';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return <ListGroup className="col-md-10">{videoItems}</ListGroup>;
};

export default VideoList;
