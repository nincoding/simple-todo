import { useState, useRef } from "react";
import { ThemeProvider } from '@mui/material/styles';

import { modalTextFieldTheme } from "../styles/textFieldTheme";
import { TextField } from "@mui/material";

import { ModalRemoveIcon, PinIcon, ModalEditIcon } from '../styles/ModeIcons';
import ModalWrapper from "../styles/ModalWrapper";
import styled from 'styled-components';
import { Button } from '@mui/material';
import { removeModalBtnTheme, cancelModalBtnTheme } from '../styles/createBtnTheme';

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

const TodoItemModal = ({ 
  open,
  onClose,
  todoItem,
  isRemoveClicked,
  isEditClicked,
  onRemoveClick,
  onEditClick,
 }) => {

  const [ input, setInput ] = useState(todoItem.todoItemContent);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const label = input.length > 200 ? "200글자를 넘으면 안됩니다." : "할 일을 수정 해주세요.";
  const isButtonDisabled = input.length > 200;


  return (
    <>
    {open && <ModalBackGround />}
    <ModalWrapper 
      open={open}
      onClick={() => {
      if (isEditClicked) return;
      if (isRemoveClicked) return;
       onClose();
      }}
    >
      {!isEditClicked && !isRemoveClicked && <>
        <PinIcon />
        <p>{todoItem.todoItemContent}</p>
      </>}

      {isRemoveClicked && <>
        <ModalRemoveIcon />
        <p className='remove'>정말 삭제하시겠습니까?</p>
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
      </>
      }
    
      {
        isEditClicked && 
        <>
          <ModalEditIcon />
          <ThemeProvider theme={modalTextFieldTheme}>
          <TextField
            fullWidth
            id="todo-item-input"
            label={label}
            variant="outlined"
            value={input}
            onChange={handleChange}
            multiline
            maxRows={7}
          />
          </ThemeProvider>
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
              disabled={isButtonDisabled} 
              onClick={() =>{
                onEditClick(todoItem, input);
                onClose();
              }}
            >
              수정</Button>
          </ThemeProvider>
        </div>
        </>
      }

      {console.log(isEditClicked)}
    </ModalWrapper>
    </>
  )
}

export default TodoItemModal;