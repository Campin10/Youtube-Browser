import React from "react";
import FormVideo from "../Form/Form-video";
import {
  ActionContainer,
  BackIcon,
  ButtonCreate,
  DividerHeader,
  HeaderContainer,
  NextIcon,
  RowContainer,
  RowsContainer,
  TitleNavigation,
} from "../Header/Header.style";


const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <FormVideo open={open} close={handleClose}></FormVideo>
      <HeaderContainer>
        <ActionContainer>
          <RowsContainer>
            <RowContainer>
              <BackIcon></BackIcon>
            </RowContainer>
            <RowContainer>
              <NextIcon></NextIcon>
            </RowContainer>
          </RowsContainer>
          <ButtonCreate variant="outlined" color="inherit" onClick={handleOpen}>
            Create
          </ButtonCreate>
        </ActionContainer>
        <TitleNavigation>Resently Added</TitleNavigation>
        <DividerHeader></DividerHeader>
      </HeaderContainer>
    </>
  );
};

export default Header;
