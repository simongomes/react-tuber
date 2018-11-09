import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './css/style.css';

const API_KEY = 'AIzaSyAE2Ayxrg6_wWiegnsNL3x8dmZh3NC_SVQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_KEY, term: 'graphQL' }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <SearchBar />
        </div>
        <div className="row justify-content-md-center">
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="row justify-content-md-center">
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
