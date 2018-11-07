import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAE2Ayxrg6_wWiegnsNL3x8dmZh3NC_SVQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'movies' }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
