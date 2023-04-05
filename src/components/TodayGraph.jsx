import styled from "styled-components";
import TodayGraphWrapper from "../styles/TodayGraphWrapper";
import ProgressRing from "../styles/ProgressRing";

const TodayGraph = ({ todoItemList }) => {

  const completedListNum = todoItemList.filter((item) => item.isFinished).length;
  const averageNum = completedListNum > 0 ? Math.round((completedListNum / todoItemList.length) * 100) : "0";
  const circumference = 2 * Math.PI * 55;
  const progress = (averageNum / 100) * circumference;

  return (
    <TodayGraphWrapper >
      <h1>TODAY I DO</h1>
      <ProgressRing circumference={circumference} progress={progress}>
        <circle cx="75" cy="75" r="55" />
        <circle cx="75" cy="75" r="55" />
      </ProgressRing>
      <p>{`${averageNum} %`}</p>
    </TodayGraphWrapper>
  );
};

export default TodayGraph;
