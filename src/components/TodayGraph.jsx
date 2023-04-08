import { DarkModeContext } from "../contexts/TodoContext";

// style
import TodayGraphWrapper from "../styles/TodayGraphWrapper";
import ProgressRing from "../styles/ProgressRing";
import { useContext } from "react";

const TodayGraph = ({ todoList }) => {

  const date = new Date();
  const weekly = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const completedListNum = todoList.filter((item) => item.finish).length;
  const averageNum = completedListNum > 0 ? Math.round((completedListNum / todoList.length) * 100) : "0";
  
  const circumference = 2 * Math.PI * 55;
  const progress = (averageNum / 100) * circumference;

  const isDarkMode = useContext(DarkModeContext);

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
      <ProgressRing circumference={circumference} progress={progress} isDarkMode={isDarkMode}>
        <circle cx="75" cy="75" r="55" />
        <circle cx="75" cy="75" r="55" />
      </ProgressRing>
      <p>{`${averageNum} %`}</p>
    </TodayGraphWrapper>
  );
};

export default TodayGraph;
