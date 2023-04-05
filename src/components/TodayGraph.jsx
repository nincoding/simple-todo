import TodayGraphWrapper from "../styles/TodayGraphWrapper";

const TodayGraph = ({ todoItemList }) => {

  const completedListNum = todoItemList.filter((item) => item.isFinished ).length;
  const averageNum = completedListNum > 0 ? Math.round((completedListNum / todoItemList.length) * 100) : "0";

  return (
    <TodayGraphWrapper>
      <h1>TODAY I DO</h1>
      <p>{`${averageNum} %`}</p>
    </TodayGraphWrapper>
  )
}

export default TodayGraph;