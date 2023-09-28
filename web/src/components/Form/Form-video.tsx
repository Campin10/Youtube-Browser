import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { YOUTUBE_URL_REGEX } from "../../constants";
import {
  clearResponse,
  createVideo,
  updateVideo,
} from "../../store/video/video.action";
import { getApiError, getApiSuccess } from "../../store/video/video.selector";
import { Video, videoForm } from "../../types/video.interface";
import { DialogVideo } from "../Form/Form-video.style";
import { ButtonCreate } from "../Header/Header.style";

interface Props {
  open: boolean;
  close: any;
  video?: Video | null;
}

const FormVideo = (props: Props) => {
  const { open, close, video } = props;
  const validationSchema = yup.object().shape({
    name: yup.string().trim().min(2).max(50).required(),
    url: yup
      .string()
      .trim()
      .matches(YOUTUBE_URL_REGEX, "please provide a valid url!")
      .min(2)
      .max(50)
      .required(),
  });
  const initialValues: videoForm = {
    name: "",
    url: "",
  };

  const { handleSubmit, control, errors } = useForm({
    mode: "onChange",
    defaultValues: video ? { name: video.name, url: video.url } : initialValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: false,
  });
  const dispatch = useDispatch();
  const success = useSelector(getApiSuccess);
  const error = useSelector(getApiError);

  useEffect(() => {
    if (success) {
      toast.success(video?.name ? "video updated!" : "video created!", {
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
    if (error?.message != null) {
      toast.error('General error please try again!', {
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
  }, [error, success]);

  const onSubmit = async (values: any): Promise<void> => {
    if (video) {
      dispatch(updateVideo({ ...video, ...values }));
    } else {
      dispatch(createVideo(values));
    }
    close();
  };
  return (
    <>
    <ToastContainer/>
      <DialogVideo open={open} onClose={close} fullWidth role="section">
        <DialogTitle>{video ? "Edit" : "Create"}</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={2}
              direction="column"
              role={"video-create"}
              aria-labelledby={"form-video"}
            >
              <Grid item md={6} xs={12}>
                <Controller
                  as={TextField}
                  variant="outlined"
                  autoFocus={true}
                  name="name"
                  fullWidth
                  control={control}
                  error={!!errors["name"]}
                  helperText={errors["name"]?.message}
                  FormHelperTextProps={{
                    className: "error-text",
                  }}
                  placeholder={"Name"}
                  label={"Name"}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Controller
                  as={TextField}
                  variant="outlined"
                  autoFocus={true}
                  name="url"
                  fullWidth
                  control={control}
                  error={!!errors["url"]}
                  helperText={errors["url"]?.message}
                  FormHelperTextProps={{
                    className: "error-text",
                  }}
                  placeholder={"YouTube url"}
                  label={"YouTube url"}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="inherit" onClick={close}>
            Cancel
          </Button>
          <ButtonCreate
            variant="outlined"
            color="inherit"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </ButtonCreate>
        </DialogActions>
      </DialogVideo>
    </>
  );
};

export default FormVideo;
