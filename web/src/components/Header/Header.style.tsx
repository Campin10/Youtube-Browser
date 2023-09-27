import styled from "@emotion/styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Divider,
  Typography
} from "@mui/material";

export const HeaderContainer = styled(Box)(() => ({
  padding: "40px",
  paddingBottom: 0,
}));

export const RowsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  textAlign: "center",
}));

export const ActionContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const RowContainer = styled(Box)(() => ({
  color: "white",
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

export const DividerHeader = styled(Divider)(() => ({
  backgroundColor: "#363636",
}));

export const ButtonCreate = styled(Button)(() => ({
  borderColor: "#ADFF00",
  color: "#ADFF00",
}));

export const BackIcon = styled(ChevronLeftIcon)(() => ({
    color: "#FFFFFF",
    fontSize: '30px'
  }));
  
  export const NextIcon = styled(ChevronRightIcon)(() => ({
    color: "#FFFFFF",
    fontSize: '30px'
  }));
  