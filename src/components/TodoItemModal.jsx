import { ThemeProvider } from '@mui/material/styles';

import { ModalRemoveIcon, PinIcon } from '../styles/ModeIcons';
import ModalWrapper from "../styles/ModalWrapper";
import styled from 'styled-components';
import { Button } from '@mui/material';
import { createBtnTheme, removeModalBtnTheme, cancelModalBtnTheme } from '../styles/createBtnTheme';

const ModalBackGround = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`;

const TodoItemModal = ({ open, onClose, todoItem, isRemoveClicked, onRemoveClick }) => {

  return (
    <>
    {open && <ModalBackGround />}
    <ModalWrapper 
      open={open}
      onClick={() => 
      !isRemoveClicked && onClose()
    }
    >
      {isRemoveClicked ? <ModalRemoveIcon /> : <PinIcon />}
      {isRemoveClicked ? <p className='remove'>정말 삭제하시겠습니까?</p> : <p>{todoItem.todoItemContent}</p>}
      {isRemoveClicked && 
        <div className='removeModalBtn'>
          <ThemeProvider theme={cancelModalBtnTheme}>
            <Button 
              onClick={() => onClose()}
            >
              취소
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={removeModalBtnTheme}>
            <Button 
              onClick={() =>{ 
                onRemoveClick(todoItem);
                onClose();
              }}
            >
              삭제</Button>
          </ThemeProvider>
        </div>
      }
    </ModalWrapper>
    </>
  )
}

export default TodoItemModal;