import {
  DeleteIcon,
  EditIcon,
  VideoActionsContainer,
} from "./video-card.style";

interface Props {
  handleOpen: any;
  handleOpenConfirm: any;
}

const VideoActions = (props: Props) => {
  const { handleOpen, handleOpenConfirm } = props;
  return (
    <>
      <VideoActionsContainer>
        <EditIcon onClick={handleOpen}></EditIcon>
        <DeleteIcon onClick={handleOpenConfirm}></DeleteIcon>
      </VideoActionsContainer>
    </>
  );
};

export default VideoActions;
