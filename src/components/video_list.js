import React from 'react';
import VideoListItem from './video_list_item';
import { ListGroup } from 'reactstrap';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });
  return <ListGroup className="col-md-4">{videoItems}</ListGroup>;
};

export default VideoList;
