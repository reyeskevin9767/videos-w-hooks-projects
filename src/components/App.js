import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Reusable Hook
  const [videos, search] = useVideos('react js');

  // Render when a new list of videos are returned
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // Get info about video from videoItem
  // Communicate from parent to child with props
  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  // ^--- exact as onVideoSelect={(video) => setSelectedVideo(video)}
  // and onVideoSelect={setSelectedVideo}
  // Best for one-line event handlers

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui stackable grid ">
        <div className="row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
