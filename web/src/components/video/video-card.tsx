import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { Video } from "../../types/video.interface";
import { getVideoIdFromUrl } from "../../utils";
import { VideoCardStyled } from "./video-card.style";

interface Props {
  video?: Video;
}

const VideoCard = (props: Props) => {
  useEffect(() => {}, []);

  const { video } = props;

  const getThumbnail = (url: string | undefined) => {
    if (url) {
      return `https://img.youtube.com/vi/${getVideoIdFromUrl(url)}/mqdefault.jpg`;
    }
  };
  return (
    <>
      <VideoCardStyled>
        <CardMedia
          component="img"
          image={getThumbnail(video?.url)}
          alt={video?.name}
        ></CardMedia>
      </VideoCardStyled>
    </>
  );
};

export default VideoCard;
