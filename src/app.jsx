import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import SearchBar from "./components/header/search_bar";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div>
      <SearchBar onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
