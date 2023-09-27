import { memo } from "react";
import { BackIcon, NextIcon } from "../Header/Header.style";
import { MainContainer, PauseIcon, PlayIcon } from "./Player-actions.style";
interface Props {
  play: boolean;
  onPlayChange: any;
}
const PlayerActions = (props: Props) => {
  const { play, onPlayChange } = props;
  return (
    <MainContainer>
      <BackIcon></BackIcon>
      {play ? (
        <PauseIcon onClick={onPlayChange}></PauseIcon>
      ) : (
        <PlayIcon onClick={onPlayChange}></PlayIcon>
      )}
      <NextIcon></NextIcon>
    </MainContainer>
  );
};

export default memo(PlayerActions);
