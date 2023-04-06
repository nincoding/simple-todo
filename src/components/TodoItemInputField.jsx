import { useState, useRef } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TextField } from "@mui/material";
import textFieldTheme from "../styles/textFieldTheme";
import CreateButton from "./CreateButton";
import TodoInputWrapper from "../styles/TodoInputWrapper";


const TodoItemInputField = (props) => {

  const [ input, setInput ] = useState("");

  const contentInput = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const onCreate = () => {
    if (input.length === 0) {
      contentInput.current.focus();
      return;
    }
    props.onCreate(input);
    setInput("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isButtonDisabled) {
      onCreate();
    }
  };

  const label = input.length > 200 ? "200글자를 넘으면 안됩니다." : "할 일을 추가 해주세요.";
  const isButtonDisabled = input.length > 200;

  return (
    <TodoInputWrapper>
    <ThemeProvider theme={textFieldTheme}>
      <TextField
        fullWidth
        id="todo-item-input"
        label={label}
        variant="outlined"
        value={input}
        onChange={handleChange}
        inputRef={contentInput}
        onKeyDown={handleKeyDown}
      />
      <CreateButton onClick={onCreate} disabled={isButtonDisabled}/>
    </ThemeProvider>
    </TodoInputWrapper>
  )
};

export default TodoItemInputField;