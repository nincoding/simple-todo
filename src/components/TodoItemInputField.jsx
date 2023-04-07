import { useState, useRef, useContext } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TextField } from "@mui/material";
import { textFieldTheme } from "../styles/textFieldTheme";
import CreateButton from "./CreateButton";
import TodoInputWrapper from "../styles/TodoInputWrapper";

import { TodoDispatchContext } from "../contexts/TodoContext";

const TodoItemInputField = () => {

  const [ content, setContent ] = useState("");
  const { onCreate } = useContext(TodoDispatchContext);
  const contentInput = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const onCreateClick = () => {
    if (content.length === 0) {
      contentInput.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isButtonDisabled) {
      onCreateClick();
    }
  };

  const label = content.length > 200 ? "200글자를 넘으면 안됩니다." : "할 일을 추가 해주세요.";
  const isButtonDisabled = content.length > 200;

  return (
    <TodoInputWrapper>
    <ThemeProvider theme={textFieldTheme}>
      <TextField
        fullWidth
        id="todo-item-input"
        label={label}
        variant="outlined"
        value={content}
        onChange={handleChange}
        inputRef={contentInput}
        onKeyDown={handleKeyDown}
      />
      <CreateButton onCreateClick={onCreateClick} disabled={isButtonDisabled}/>
    </ThemeProvider>
    </TodoInputWrapper>
  )
};

export default TodoItemInputField;