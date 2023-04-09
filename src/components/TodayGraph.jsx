import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../contexts/TodoContext";

// style
import TodayGraphWrapper from "../styles/TodayGraphWrapper";
import ProgressRing from "../styles/ProgressRing";

const TodayGraph = ({ todoList }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const date = new Date();
  const weekly = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const completedListNum = todoList.filter((item) => item.finish).length;
  const averageNum = completedListNum > 0 ? Math.round((completedListNum / todoList.length) * 100) : "0";
  
  const circumference = width <= 650 ? 2 * Math.PI * 35 : 2 * Math.PI * 55;
  const progress = (averageNum / 100) * circumference;
  
  const isDarkMode = useContext(DarkModeContext);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        { width <= 650 ? (<>
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="35" />
          </>) : (<>
          <circle cx="75" cy="75" r="55" />
          <circle cx="75" cy="75" r="55" />
          </>)}
      </ProgressRing>
      <p>{`${averageNum} %`}</p>
    </TodayGraphWrapper>
  );
};

export default TodayGraph;
