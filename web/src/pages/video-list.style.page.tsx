import styled from "@emotion/styled";
import {
  Box
} from "@mui/material";

export const Container = styled(Box)(() => ({
  height: "100%",
  minHeight: "100vh",
  width: '100%',
  backgroundColor: "#1F1F1F",
}));

export const MainContainer = styled(Box)(() => ({
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "#1F1F1F",
  display: 'flex',
  flexDirection: 'row',
  borderRightColor: 'white'
}));
