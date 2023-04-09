import styled from "styled-components";
import { TbChecklist } from "react-icons/tb";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillPinAngleFill, BsPencilSquare } from 'react-icons/bs';
import { HiSun } from "react-icons/hi";
import { MdDelete } from 'react-icons/md';

export const MoonIcon = styled(RiMoonClearFill)`
  width: 35px;
  height: 35px;
  color: #FF5A5A;
  background-color: #EDEDED;
  &:hover {
    color: #5f3b3b;
    transition: 400ms;
  }
`;

export const SunIcon = styled(HiSun)`
  width: 45px;
  height: 45px;
  color: #5A88FF;
  background-color: '#1e1f22';
  &:hover {
    color: #89aaff;
    transition: 400ms;
  }
`;

export const RemoveIcon = styled(MdDelete)`
  color: #858585;
  width: 24px;
  height: 24px;
  &:hover {
    color: ${ ({ theme }) => theme.iconColor };
  }
  &:active {
    color: ${ ({ theme }) => theme.iconActiveColor };
  }
  @media screen and (max-width: 650px) {
    width: 18px;
    height: 18px;
  }
`;

export const PinIcon = styled(BsFillPinAngleFill)`
width: 50px;
height: 50px;
position: absolute;
top: -15px;
color: ${ ({ theme }) => theme.iconColor };

filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.8));
`;

export const ModalRemoveIcon = styled(RemoveIcon)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -20px;
  color: ${ ({ theme }) => theme.iconColor };
  filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.8));
`;

export const EditIcon = styled(BsPencilSquare)`
  color: #858585;
  width: 24px;
  height: 24px;
  &:hover {
    color: ${ ({ theme }) => theme.iconColor };
  }
  &:active {
    color: ${ ({ theme }) => theme.iconActiveColor };
  }
  @media screen and (max-width: 650px) {
    width: 18px;
    height: 18px;
  }
`;

export const ModalEditIcon = styled(EditIcon)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -15px;
  color: ${ ({ theme }) => theme.iconColor };
  filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.8));
`;

export const LogoIcon = styled(TbChecklist)`
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.mainColor };
`;