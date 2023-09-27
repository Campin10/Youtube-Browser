import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import VideoListPage from "./video-list.page";
import VideoPlayerPage from "./video-player.page";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<VideoListPage />} />
          <Route path="/video-list" element={<VideoListPage />} />
          <Route path="/video-player/:id" element={<VideoPlayerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
