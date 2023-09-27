import { Link } from "react-router-dom";
import { Video } from "../../types/video.interface";
import { getVideoIdFromUrl } from "../../utils";
import VideoActions from "./video-actions";
import VideoCard from "./video-card";
import {
  CardFooterContainer,
  NameVideo,
  VideoCardContainer,
  VideoCardListStyled
} from "./video-card.style";

interface Props {
  videos?: Video[];
}

const VideoCardList = (props: Props) => {
  const { videos } = props;

  return (
    <VideoCardListStyled container>
      {videos &&
        videos.map((video) => (
          <VideoCardContainer key={video.id}>
            <Link to={`/video-player/${getVideoIdFromUrl(video.url)}`}>
              <VideoCard video={video}></VideoCard>
            </Link>
            <CardFooterContainer>
              <NameVideo>{video.name}</NameVideo>
              <VideoActions video={video}></VideoActions>
            </CardFooterContainer>
          </VideoCardContainer>
        ))}
    </VideoCardListStyled>
  );
};

export default VideoCardList;
