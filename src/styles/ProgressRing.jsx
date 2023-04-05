import styled from "styled-components";

const ProgressRing = styled.svg`
  position: absolute;
  top: -10px;
  right: 20px;

  width: 150px;
  height: 150px;
  
  circle {
    fill: transparent;
    stroke: #FF5A5A;
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(10px, 10px);
    transition: stroke-dashoffset 500ms ease-in-out;
  }

  circle:last-child {
    stroke-dasharray: ${(props) => props.circumference};
    stroke-dashoffset: ${(props) => -props.progress};
    stroke: #F2B5AA;
    transform-origin: center;
    transform: translate(10px, 10px) rotate(-90deg);
    transition: stroke-dashoffset 500ms ease-in-out;
  }
`;

export default ProgressRing;