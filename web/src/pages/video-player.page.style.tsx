import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

export const MainContainer = styled(Box)(() => ({
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "#1F1F1F",
  display: 'flex',
  flexDirection: 'row',
  borderRightColor: 'white'
}));


export const ContainerPlayer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: '20px',
  flexDirection: 'column',
  alignItems: "center",
}));
