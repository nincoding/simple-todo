import { BsFillPinAngleFill } from 'react-icons/bs';
import ModalWrapper from "../styles/ModalWrapper";
import styled from 'styled-components';

const PinIcon = styled(BsFillPinAngleFill)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -15px;
  color: #ff5953;
  filter: drop-shadow(3px 3px 3px rgba(78, 7, 7, 0.5));
`;

const TodoItemModal = () => {
  return (
    <ModalWrapper>
      <PinIcon />
    </ModalWrapper>
  )
}

export default TodoItemModal;