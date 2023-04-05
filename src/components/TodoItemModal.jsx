import { useState } from 'react';
import { BsFillPinAngleFill } from 'react-icons/bs';
import ModalWrapper from "../styles/ModalWrapper";
import styled from 'styled-components';

const PinIcon = styled(BsFillPinAngleFill)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -15px;
  color: #ff5953;
  filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.8));
`;

const ModalBackGround = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TodoItemModal = ({ open, onClose, todoItem }) => {

  return (
    <>
    {open && <ModalBackGround />}
    <ModalWrapper 
      open={open}
      onClick={() => onClose()}
    >
      <PinIcon />
      <p>{todoItem}</p>
    </ModalWrapper>
    </>
  )
}

export default TodoItemModal;