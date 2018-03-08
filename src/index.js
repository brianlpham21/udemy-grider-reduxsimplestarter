import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';

const API_KEY = 'AIzaSyCjWW5puTxKPLfIHZFaOLwCqbotYxm0MNc';

// Create a new component. This component should produce soem HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
