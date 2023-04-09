import { useState, useRef, useContext, useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TextField } from "@mui/material";
import { textFieldDarkTheme, textFieldTheme } from "../styles/textFieldTheme";
import CreateButton from "./CreateButton";
import TodoInputWrapper from "../styles/TodoInputWrapper";

import { DarkModeContext, TodoDispatchContext } from "../contexts/TodoContext";

const TodoItemInputField = ({ date }) => {

  const [ content, setContent ] = useState("");
  const { onCreate } = useContext(TodoDispatchContext);
  const contentInput = useRef();
  const isDarkMode = useContext(DarkModeContext);
  const [width, setWidth] = useState(window.innerWidth);

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const onCreateClick = () => {
    if (content.length === 0) {
      contentInput.current.focus();
      return;
    }
    onCreate(date, content);
    setContent("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isButtonDisabled) {
      onCreateClick();
    }
  };

  const label = content.length > 200 ? "200글자를 넘으면 안됩니다." : "할 일을 추가 해주세요.";
  const isButtonDisabled = content.length > 200;

  const theme = isDarkMode ? textFieldDarkTheme : textFieldTheme;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const smallMode = width <= 650 ? 'small' : '';

  return (
    <TodoInputWrapper >
    <ThemeProvider theme={ theme }>
      <TextField
        fullWidth
        id="todo-item-input"
        label={label}
        variant="outlined"
        value={content}
        onChange={handleChange}
        inputRef={contentInput}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        size={smallMode}
      />
      <CreateButton onCreateClick={onCreateClick} disabled={isButtonDisabled} />
    </ThemeProvider>
    </TodoInputWrapper>
  )
};

export default TodoItemInputField;