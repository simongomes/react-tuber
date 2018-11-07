import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAE2Ayxrg6_wWiegnsNL3x8dmZh3NC_SVQ';

YTSearch({ key: API_KEY, term: 'surfboard' }, data => console.log(data));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
