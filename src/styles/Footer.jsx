import styled from "styled-components";
import { GoGraph } from "react-icons/go";
import { BsCalendarCheck} from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

export const OnGraphIcon = styled(GoGraph)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainColor };
  @media screen and (max-width: 650px) {
    width: 25px;
    height: 25px;
  }
`;

export const OnHomeIcon = styled(BsCalendarCheck)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainColor };
  @media screen and (max-width: 650px) {
    width: 25px;
    height: 25px;
  }
`;

export const OnCalenderIcon = styled(MdDateRange)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainColor };
  @media screen and (max-width: 650px) {
    width: 30px;
    height: 30px;
  }
`;

export const OffGraphIcon = styled(OnGraphIcon)`
  color: #898989;
`;

export const OffHomeIcon = styled(OnHomeIcon)`
  color: #898989;
`;

export const OffCalenderIcon = styled(OnCalenderIcon)`
  color: #898989;
`;

export const FooterWrapper = styled.footer`
  height: 80px;
  background-color: ${({ theme }) => theme.footerBackgroundColor };
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;

  @media screen and (max-width: 650px) {
    width: 100vw;
    height: 50px;
    bottom: 0%;
  }
  @media screen and (max-width: 412px) {
    bottom: 5.5vh;
  }
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0px;
  > div {
    display: flex;
    margin: 0% 10%;
  }
  .left {
    width: 25%;
    justify-content: start;
    > div {
      width: 35px;
      height: 35px;
      @media screen and (max-width: 650px) {
        width: 25px;
        height: 25px;
      }
    }
  }
  .center {
    width: 50%;
    justify-content: center;
    > div {
      width: 35px;
      height: 35px;
      @media screen and (max-width: 650px) {
        width: 25px;
        height: 25px;
      }
    }
  }
  .right {
    width: 25%;
    justify-content: end;
    > div {
      width: 45px;
      height: 45px;
      @media screen and (max-width: 650px) {
        width: 30px;
        height: 30px;
      }
    }
  }
`;