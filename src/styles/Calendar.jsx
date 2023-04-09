import styled from "styled-components";

export const CalendarWrapper = styled.div`
  margin: 12%;
  @media screen and (max-width: 650px) {
    margin-top: 11%;
    margin-bottom: -30px;
    font-size: 10px;
  }
  @media screen and (max-width: 412px) {
    margin-top: 10%;
    margin-bottom: 0px;
  }
  .react-calendar { 
    width: 500px;
    max-width: 100%;
    background-color: ${({ theme }) => theme.calendarBackgroundColor };
    color:  ${({ theme }) => theme.calendarColor };
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    border: none;
    font-family: 'Jalnan';
    padding-bottom: 20px;
    @media screen and (max-width: 650px) {
      width: 100%;
      height: 80%;
      position: relative;
      top: -50px;
      padding-bottom: 5px;
    }
    @media screen and (max-width: 412px) {
      width: 100%;
      padding-bottom: 10px;
      top: -25px;
    }
  }
  .react-calendar__navigation {
    @media screen and (max-width: 650px) {
      height: 80%;
    }
  }
  .react-calendar__navigation button {
    color: ${({ theme }) => theme.mainColor };
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
    color: ${({ theme }) => theme.calendarDayColor };
    @media screen and (max-width: 412px) {
    font-size: 10px;
  }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #808080;
  }
  .react-calendar__month-view__days__day--weekend {
    color: ${({ theme }) => theme.mainColor };
    font-family: 'Jalnan';
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: ${({ theme }) => theme.mainColor };
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: ${({ theme }) => theme.calendarNowBackground };
    border-radius: 6px;
    font-weight: bold;
    color: ${({ theme }) => theme.mainColor };
    font-family: 'Jalnan';
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.mainColor };
    border-radius: 6px;
    font-weight: bold;
    color: white;
    font-family: 'Jalnan';
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
    font-family: 'Jalnan';
  }
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.mainColor };
    border-radius: 6px;
    font-weight: bold;
    color: white;
    font-family: 'Jalnan';
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.mainColor };
    color: white;
    font-family: 'Jalnan';
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: ${({ theme }) => theme.mainColor };
    border-radius: 0;
    font-family: 'Jalnan';
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: ${({ theme }) => theme.mainColor };
    color: white;
    font-family: 'Jalnan';
}
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: ${({ theme }) => theme.mainColor };
    color: white;
    font-family: 'Jalnan';
  }
`;