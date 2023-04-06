import styled from "styled-components";
import { GoGraph } from "react-icons/go";
import { BsCalendarCheck} from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

export const OnGraphIcon = styled(GoGraph)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: #FF5A5A;
`;

export const OnHomeIcon = styled(BsCalendarCheck)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: #FF5A5A;
`;

export const OnCalenderIcon = styled(MdDateRange)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: #FF5A5A;
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
  background-color: #EDEDED;
  position: fixed;
  bottom: 0%;
  @media screen and (min-width: 650px) {
      width: 640px;
    }
  @media screen and (max-width: 650px) {
    width: 90vw;
  }
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0px;
  > div {
    display: flex;
    margin: 0px 50px;
  }
  .left {
    width: 25%;
    justify-content: start;
    > div {
      width: 35px;
      height: 35px;
    }
  }
  .center {
    width: 50%;
    justify-content: center;
    > div {
      width: 35px;
      height: 35px;
    }
  }
  .right {
    width: 25%;
    justify-content: end;
    > div {
      width: 45px;
      height: 45px;
    }
  }
`;