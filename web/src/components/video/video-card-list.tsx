import { useState } from "react";
import { Link } from "react-router-dom";
import { Video } from "../../types/video.interface";
import { getVideoIdFromUrl } from "../../utils";
import FormVideo from "../Form/Form-video";
import ConfirmDelete from "../common/Confirm-dialog";
import VideoActions from "./video-actions";
import VideoCard from "./video-card";
import {
  CardFooterContainer,
  NameVideo,
  VideoCardContainer,
  VideoCardListStyled,
} from "./video-card.style";

interface Props {
  videos?: Video[];
}

const VideoCardList = (props: Props) => {
  const { videos } = props;
  const [open, setOpen] = useState(false);
  const [editVideo, SetEditVideo] = useState<Video>();
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleOpenConfirm = (video: Video) => {
    SetEditVideo(video);
    setOpenConfirm(true);
  };
  const handleCloseConfirm = () => setOpenConfirm(false);
  const handleOpen = (video: Video) => {
    setOpen(true);
    SetEditVideo(video);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      {open && (
        <FormVideo
          open={open}
          close={handleClose}
          video={editVideo}
        ></FormVideo>
      )}
      <ConfirmDelete
        open={openConfirm}
        close={handleCloseConfirm}
        video={editVideo}
      ></ConfirmDelete>

      <VideoCardListStyled container>
        {videos &&
          videos.map((video) => (
            <VideoCardContainer key={video.id}>
              <Link to={`/video-player/${getVideoIdFromUrl(video.url)}`}>
                <VideoCard video={video}></VideoCard>
              </Link>
              <CardFooterContainer>
                <NameVideo>{video.name}</NameVideo>
                <VideoActions
                  handleOpen={() => handleOpen(video)}
                  handleOpenConfirm={() => handleOpenConfirm(video)}
                ></VideoActions>
              </CardFooterContainer>
            </VideoCardContainer>
          ))}
      </VideoCardListStyled>
    </>
  );
};

export default VideoCardList;
