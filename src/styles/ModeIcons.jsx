import styled from "styled-components";

import { RiMoonClearFill } from "react-icons/ri";
import { BsFillPinAngleFill, BsPencilSquare } from 'react-icons/bs';
import { HiSun } from "react-icons/hi";
import { MdDelete } from 'react-icons/md';

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

export const RemoveIcon = styled(MdDelete)`
  color: #858585;
  width: 24px;
  height: 24px;
  &:hover {
    color: #ff5a5a;
  }
  &:active {
    color: #943737;
  }
`;

export const PinIcon = styled(BsFillPinAngleFill)`
width: 50px;
height: 50px;
position: absolute;
top: -15px;
color: #ff5953;
filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.8));
`;

export const ModalRemoveIcon = styled(RemoveIcon)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -20px;
  color: #ff5953;
  filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.8));
`;

export const EditIcon = styled(BsPencilSquare)`
  color: #858585;
  width: 24px;
  height: 24px;
  &:hover {
    color: #ff5a5a;
  }
  &:active {
    color: #943737;
  }
`;

export const ModalEditIcon = styled(EditIcon)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -15px;
  color: #ff5953;
  filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.8));
`;