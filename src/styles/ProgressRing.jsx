import styled from "styled-components";

const ProgressRing = styled.svg`
  position: absolute;
  top: -10px;
  right: 20px;

  width: 150px;
  height: 150px;
  @media screen and (max-width: 650px) {
    top: -10px;
    right: 0px;
    width: 100px;
    height: 100px;
  }
  circle {
    fill: transparent;
    stroke: ${({ isDarkMode }) => isDarkMode ? '#3A5BAE' : '#FF5A5A' };
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(10px, 10px);
    transition: stroke-dashoffset 300ms ease-in-out;
    @media screen and (max-width: 650px) {
      stroke-width: 7;
      transform: translate(-10px, 10px);
    }
  }

  circle:last-child {
    stroke-dasharray: ${(props) => props.circumference};
    stroke-dashoffset: ${(props) => -props.progress};
    stroke: ${({ isDarkMode }) => isDarkMode ? '#e7e7e781' : '#F2B5AA'};
    transform-origin: center;
    transform: translate(10px, 10px) rotate(-90deg);
    transition: stroke-dashoffset 300ms ease-in-out;
    @media screen and (max-width: 650px) {
      transform: translate(-10px, 10px) rotate(-90deg);
    }
  }
`;

export default ProgressRing;