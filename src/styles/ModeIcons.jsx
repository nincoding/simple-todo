import { RiMoonClearFill } from "react-icons/ri";
import { HiSun } from "react-icons/hi";
import styled from "styled-components";

export const MoonIcon = styled(RiMoonClearFill)`
  width: 50px;
  height: 50px;
  color: #FF5A5A;

  &:hover {
    color: #5f3b3b;
    transition: 400ms;
  }
`;

export const SunIcon = styled(HiSun)`
  width: 60px;
  height: 60px;
  color: #5A88FF;

  &:hover {
    color: #2c4380;
    transition: 400ms;
  }
`;