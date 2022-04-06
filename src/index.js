import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

// const youtube = new Youtube("AIzaSyDelGoqmhxIXr6UfTS8vPQ8Pptrz0nu7cs");
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
