import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file for your styling

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch the list of videos from the backend server when the component mounts
    fetch('http://localhost:5000/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Sharing Platform</h1>
      </header>
      <main>
        {videos.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </main>
    </div>
  );
};

const VideoItem = ({ video }) => (
  <div className="video-item">
    <h2>{video.title}</h2>
    <video src={video.url} controls />
  </div>
);

export default App;
