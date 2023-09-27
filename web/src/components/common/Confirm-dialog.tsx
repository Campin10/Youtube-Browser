import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteVideo
} from "../../store/video/video.action";
import { Video } from "../../types/video.interface";
import { DialogVideo } from "../Form/Form-video.style";

interface Props {
  open: boolean;
  close: any;
  video?: Video;
}

const ConfirmDelete = (props: Props) => {
  const { open, close, video } = props;

  const dispatch = useDispatch();

  const onDelete = async (values: any): Promise<void> => {
    dispatch(deleteVideo({ ...video, ...values }));
    close();
  };

  return (
    <DialogVideo open={open} onClose={close} fullWidth>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        Are you sure to delete {video?.name} video ?
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="inherit" onClick={close}>
          Cancel
        </Button>
        <Button variant="outlined" color="error" onClick={onDelete}>
          Delete
        </Button>
      </DialogActions>
    </DialogVideo>
  );
};

export default ConfirmDelete;
