import { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TextField } from "@mui/material";
import textFieldTheme from "../styles/textFieldTheme";

const TodoItemInputField = () => {

  const [ input, setInput ] = useState("");

  console.log(input);

  return (
    <ThemeProvider theme={textFieldTheme}>
      <TextField 
        fullWidth
        id="todo-item-input"
        label="할 일을 추가 해주세요."
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </ThemeProvider>
  )
};

export default TodoItemInputField;