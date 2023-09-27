import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header/Header";
import MainMenu from "../components/Menu/Menu";
import VideoCardList from "../components/video/video-card-list";
import { fetchVideos } from "../store/video/video.action";
import { getSelectedVideos } from "../store/video/video.selector";
import { Container, MainContainer } from "./video-list.style.page";

const VideoListPage = () => {
  const dispatch = useDispatch();
  const videos = useSelector(getSelectedVideos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <MainContainer>
      <MainMenu></MainMenu>
      <Container>
        <Header></Header>
        <VideoCardList videos={videos}></VideoCardList>
      </Container>
    </MainContainer>
  );
};

export default VideoListPage;
