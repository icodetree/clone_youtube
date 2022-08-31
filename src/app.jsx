import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchBar from "./components/header/search_bar";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedvideo] = useState(null);

    const selectVideo = (video) => {
        setSelectedvideo(video);
    };
    const search = (query) => {
        setSelectedvideo(null);
        youtube
            .search(query) //
            .then((videos) => {
                setVideos(videos);
            });
    };

    useEffect(() => {
        youtube
            .mostPopular() //
            .then((videos) => setVideos(videos));
    }, []);

    return (
        <div className={styles.app}>
            <SearchBar onSearch={search} />
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo} />
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo}
                        display={selectedVideo ? "list" : "grid"}
                    />
                    ;
                </div>
            </section>
        </div>
    );
}

export default App;
