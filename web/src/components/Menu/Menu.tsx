import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";
import { GeneralContainer, HomeTitle, LinkHome, MenuContainer } from "./Menu.style";

const MainMenu = () => {
  return (
    <>
      <MenuContainer>
      <LinkHome to={`/video-list`}>
        <GeneralContainer>
          <YouTubeIcon></YouTubeIcon>
          <Typography>Youtube video</Typography>
        </GeneralContainer>
        </LinkHome>
        <LinkHome to={`/video-list`}>
          
        <GeneralContainer>
            <HomeIcon></HomeIcon>
            <HomeTitle>Home</HomeTitle>
          
        </GeneralContainer>
        </LinkHome>
      </MenuContainer>
    </>
  );
};

export default MainMenu;
