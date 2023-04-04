import { useState, useRef } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TextField } from "@mui/material";
import textFieldTheme from "../styles/textFieldTheme";
import CreateButton from "./CreateButton";


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

  return (
    <ThemeProvider theme={textFieldTheme}>
      <TextField
        fullWidth
        id="todo-item-input"
        label="할 일을 추가 해주세요."
        variant="outlined"
        value={input}
        onChange={handleChange}
        inputRef={contentInput}
      />
      <CreateButton onClick={onCreate} />
    </ThemeProvider>
  )
};

export default TodoItemInputField;