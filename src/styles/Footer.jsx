import styled from "styled-components";
import { GoGraph } from "react-icons/go";
import { BsCalendarCheck} from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

export const OnGraphIcon = styled(GoGraph)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainColor };
`;

export const OnHomeIcon = styled(BsCalendarCheck)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainColor };
`;

export const OnCalenderIcon = styled(MdDateRange)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainColor };
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
      width: 25px;
      height: 25px;
    }
  }
  .center {
    width: 50%;
    justify-content: center;
    > div {
      width: 25px;
      height: 25px;
    }
  }
  .right {
    width: 25%;
    justify-content: end;
    > div {
      width: 30px;
      height: 30px;
    }
  }
`;