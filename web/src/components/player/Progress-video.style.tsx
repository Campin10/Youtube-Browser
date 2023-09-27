import styled from "@emotion/styled";
import { Box, LinearProgress, Typography, linearProgressClasses } from "@mui/material";

export const MainContainer = styled(Box)(() => ({
    display: "flex",
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: '20px'
  }));

export const ProgressBar = styled(LinearProgress)(() => ({
    height: 8,
    width: '50vw' ,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor: "#00FF00",
    },
  }));


  export const TimeLabel = styled(Typography)(() => ({
    color: "#6B7280",
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: 400,
  }));