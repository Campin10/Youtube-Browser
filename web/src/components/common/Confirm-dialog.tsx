import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearResponse, deleteVideo } from "../../store/video/video.action";
import { getApiDeleted } from "../../store/video/video.selector";
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

  const deleted = useSelector(getApiDeleted);

  useEffect(() => {
    if (deleted) {
      console.log('here2', deleted)
      toast.success("video deleted!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    dispatch(clearResponse());
  }, [deleted]);

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
