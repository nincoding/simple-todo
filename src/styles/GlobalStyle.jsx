import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  body {
    font-family: 'Jalnan';
    //background-color: #f6f6f6;
    background-color: ${(props) => props.isDarkMode ? '#1e1e1e' : '#f6f6f6'};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  #root {
    background-color: white;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  }
  .App {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #f2f2f2;
    @media screen and (min-width: 650px) {
      width: 640px;
    }
    @media screen and (max-width: 650px) {
      width: 90vw;
    }
  }
  .imgWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    margin-top: 10vh;
    > p {
      color: ${(props) => props.isDarkMode ? '#D7D7D7' : '#303030' };
      font-size: 18px;
    }
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    opacity: 80%;
  }
  /* 캘린더 */
  .react-calendar { 
  width: 500px;
  max-width: 100%;
  background-color: ${(props) => props.isDarkMode ? '#303030' : '#fff7dab0' };
  color:  ${(props) => props.isDarkMode ? '#89aaff' : '#A65D50' };
  border-radius: 8px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
  border: none;
  font-family: 'Jalnan';
  padding-bottom: 20px;
}
.react-calendar__navigation button {
 color: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 min-width: 44px;
 background: none;
 font-size: 15px;
 margin-top: 8px;
 font-family: 'Jalnan';
}
.react-calendar__tile {
  font-family: 'Jalnan';
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
}
.react-calendar__month-view__days__day {
  color: ${(props) => props.isDarkMode ? '#89aaff' : '#222' };
}
.react-calendar__month-view__days__day--neighboringMonth {
  color: #808080;
}
.react-calendar__month-view__days__day--weekend {
 color: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 font-family: 'Jalnan';
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #f8f8fa;
 color: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 border-radius: 6px;
}
.react-calendar__tile--now {
 background: ${(props) => props.isDarkMode ? '#5a89ff53' : '#ff595657' };
 border-radius: 6px;
 font-weight: bold;
 color: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 font-family: 'Jalnan';
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 border-radius: 6px;
 font-weight: bold;
 color: ${(props) => props.isDarkMode ? 'white' : 'white' };
 font-family: 'Jalnan';
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
 font-family: 'Jalnan';
}
.react-calendar__tile--active {
 background: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 border-radius: 6px;
 font-weight: bold;
 color: white;
 font-family: 'Jalnan';
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 color: white;
 font-family: 'Jalnan';
}
.react-calendar--selectRange .react-calendar__tile--hover {
 background-color: #f8f8fa;
}
.react-calendar__tile--range {
 background: #f8f8fa;
 color: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 border-radius: 0;
 font-family: 'Jalnan';
}
.react-calendar__tile--rangeStart {
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 border-top-left-radius: 6px;
 border-bottom-left-radius: 6px;
 background: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 color: white;
 font-family: 'Jalnan';
}
.react-calendar__tile--rangeEnd {
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 border-top-right-radius: 6px;
 border-bottom-right-radius: 6px;
 background: ${(props) => props.isDarkMode ? '#5A88FF' : '#ff5a5a' };
 color: white;
 font-family: 'Jalnan';
}

/* 다크모드 적용 */
.App.dark {
  background-color: #181818;
}
`;

export default GlobalStyle;