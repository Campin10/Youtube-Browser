import { getFormatMinutesAndSecond } from "../../utils";
import { MainContainer, ProgressBar, TimeLabel } from "./Progress-video.style";


interface Props {
  loaded: number;
  duration: number;
}
const ProgressVideo = (props: Props) => {
  const { loaded, duration } = props;
  const calculatePercentage = () => {
    return (loaded/duration) * 100
  }

  return (
    <MainContainer>
      <TimeLabel>{getFormatMinutesAndSecond(Math.floor(loaded))}</TimeLabel>
      <ProgressBar value={calculatePercentage()} variant="determinate"/>
      <TimeLabel>{getFormatMinutesAndSecond(duration)}</TimeLabel>
    </MainContainer>
  );
};

export default ProgressVideo;
