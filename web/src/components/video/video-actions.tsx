import { useState } from "react";
import { Video } from "../../types/video.interface";
import FormVideo from "../Form/Form-video";
import ConfirmDelete from "../common/Confirm-dialog";
import {
  DeleteIcon,
  EditIcon, VideoActionsContainer
} from "./video-card.style";

interface Props {
  video?: Video;
}

const VideoActions = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openConfirm, setOpenConfirm] = useState(false);
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  const {video} = props 
  return (
    <>
      <FormVideo open={open} close={handleClose} video={video}></FormVideo>
      <ConfirmDelete open={openConfirm} close={handleCloseConfirm} video={video}></ConfirmDelete>
      <VideoActionsContainer>
        <EditIcon onClick={handleOpen}></EditIcon>
        <DeleteIcon onClick={handleOpenConfirm}></DeleteIcon>
      </VideoActionsContainer>
    </>
  );
};

export default VideoActions;
