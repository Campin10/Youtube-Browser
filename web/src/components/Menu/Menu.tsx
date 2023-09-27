import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";
import { GeneralContainer, LinkHome, MenuContainer } from "./Menu.style";

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
        <GeneralContainer>
          <LinkHome to={`/video-list`}>
            <HomeIcon></HomeIcon>
          </LinkHome>
        </GeneralContainer>
      </MenuContainer>
    </>
  );
};

export default MainMenu;
