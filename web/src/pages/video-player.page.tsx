import { Video } from "../types/video.interface";

import { useMemo, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import MainMenu from "../components/Menu/Menu";
import PlayerActions from "../components/player/Player-actions";
import ProgressVideo from "../components/player/Progress-video";
import { ContainerPlayer, MainContainer } from "./video-player.page.style";

interface Props {
  video?: Video;
}

const VideoPlayerPage = (props: Props) => {
  const params = useParams<any>();
  const [play, setPlay] = useState(true)
  const [loaded, setLoaded] = useState(0)
  const [duration, setDuration] = useState(0)
  const handleChange = () => setPlay(!play)

  const onDuration = (duration: number) => {
    setDuration(duration)
  }
  const onProgress = (params: any) => {
    setLoaded(Math.floor(params.playedSeconds))
  }

  useMemo(() => {}, [play])

  return (
    <MainContainer>
      <MainMenu></MainMenu>
      <ContainerPlayer>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${params?.id}`}
          controls={false}
          playing={play}
          height={'87vh'}
          width={'86vw'}
          onDuration={onDuration}
          onProgress={onProgress}
        />
         <PlayerActions play={play} onPlayChange={handleChange}></PlayerActions>
        <ProgressVideo loaded={loaded} duration={duration}></ProgressVideo>
      </ContainerPlayer>
    </MainContainer>
  );
};

export default VideoPlayerPage;
