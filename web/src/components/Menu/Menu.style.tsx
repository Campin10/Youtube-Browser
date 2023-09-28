import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const MenuContainer = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  textAlign: "center",
  color: "#ADFF00",
  justifyContent: "space-between",
  paddingTop: "40px",
  paddingLeft: "20px",
  paddingBottom: "40px",
  borderRight: "0.2px solid white",
  paddingRight: "20px",
  minWidth: "150px",
}));

export const TitleNavigation = styled(Typography)(() => ({
  fontFamily: "SF Pro Display",
  paddingTop: "20px",
  paddingBottom: "10px",
  color: "#FFFFFF",
  fontSize: "40px",
  lineHeight: "43px",
  fontWeight: 700,
}));

export const HomeTitle = styled(Typography)(() => ({
  fontFamily: "SF Pro Display",
  paddingBottom: "10px",
  color: "#6B7280",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: 500,
  marginTop: '4px'
}));

export const GeneralContainer = styled(Box)(() => ({
  display: "flex",
  gap: "5px",
  flexDirection: "row",
  textAlign: "center",
  color: "#ADFF00",
}));

export const LinkHome = styled(Link)(() => ({
  '&:visited': {
    color: '#ADFF00'
  },
  '&:hover': {
    textDecoration: 'none'
  },
  textDecoration: 'none'
}));
