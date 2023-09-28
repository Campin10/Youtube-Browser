import styled from "@emotion/styled";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {
  Card,
  Grid,
  Typography
} from "@mui/material";

export const VideoCardStyled = styled(Card)(() => ({
  background: "white",
  borderRadius: "4px",
  display: "auto",
  alignItems: "auto",
  justifyContent: "auto"
}));

export const VideoCardListStyled = styled(Grid)(() => ({
  padding: "40px",
  display: "flex",
  gap: "16px",
  backgroundColor: "transparent",
}));

export const VideoCardContainer = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const NameVideo = styled(Typography)(() => ({
  fontFamily: 'SF Pro Display', 
  color: "#FAFAFA",
  fontSize: "16px",
  lineHeight: "42px",
  fontWeight: 700,
}));


export const VideoActionsContainer = styled(Typography)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
}));


export const CardFooterContainer = styled(Typography)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: 'space-between',
  gap: "16px",
}));


export const EditIcon = styled(ModeEditOutlineIcon)(() => ({
  color: 'white',
  margin: 'auto',
  fontSize: '20px',
  cursor: 'pointer'
}));


export const DeleteIcon = styled(RemoveCircleIcon)(() => ({
  color: 'white',
  margin: 'auto',
  fontSize: '20px',
  cursor: 'pointer'
}));



