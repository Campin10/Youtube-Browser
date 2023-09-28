import styled from "@emotion/styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box } from "@mui/material";

export const MainContainer = styled(Box)(() => ({
  display: "flex",
}));

export const BackIcon = styled(ChevronLeftIcon)(() => ({
  color: "#8c8c8c",
  fontSize: "30px",
}));

export const NextIcon = styled(ChevronRightIcon)(() => ({
  color: "#8c8c8c",
  fontSize: "30px",
}));

export const PlayIcon = styled(PlayCircleIcon)(() => ({
  color: "#8c8c8c",
  fontSize: "30px",
}));

export const PauseIcon = styled(PauseCircleIcon)(() => ({
  color: "#8c8c8c",
  fontSize: "30px",
}));