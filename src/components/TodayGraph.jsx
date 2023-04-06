import TodayGraphWrapper from "../styles/TodayGraphWrapper";
import ProgressRing from "../styles/ProgressRing";

const TodayGraph = ({ todoItemList }) => {

  const date = new Date();
  const weekly = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const completedListNum = todoItemList.filter((item) => item.isFinished).length;
  const averageNum = completedListNum > 0 ? Math.round((completedListNum / todoItemList.length) * 100) : "0";
  
  const circumference = 2 * Math.PI * 55;
  const progress = (averageNum / 100) * circumference;

  return (
    <TodayGraphWrapper >
      <p>{date.getFullYear()}</p>
      <p>
        <span>{weekly[date.getDay()]}</span>
         . 
         <span>{month[date.getMonth()]}</span>
         . 
         <span>{date.getDate()}</span>
      </p>
      <ProgressRing circumference={circumference} progress={progress}>
        <circle cx="75" cy="75" r="55" />
        <circle cx="75" cy="75" r="55" />
      </ProgressRing>
      <p>{`${averageNum} %`}</p>
    </TodayGraphWrapper>
  );
};

export default TodayGraph;
