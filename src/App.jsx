import { useState, useEffect, useRef, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from "styled-components";
// contant
import { PATH_URL } from "./constants/stringValues";

//store
import { DarkModeContext, TodoDispatchContext, TodoStateContext } from "./contexts/TodoContext";
import { createTodo, removeTodo, editTodo, finishTodo } from "./store/actions";
import reducer from "./store/reducer";

// page
import Home from "./pages/Home";
import Graph from "./pages/Graph";
import Calendar from "./pages/Calendar";

// component
import Header from "./components/Header";
import ModeButton from "./components/ModeButton";
import Footer from "./components/Footer";
import { darkTheme, lightTheme } from "./styles/ModeTheme";

// firebase
import { collection, addDoc, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { db, syncTodoItemListStateWithFirestore } from "./utils/firebase";

function App() {

  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    syncTodoItemListStateWithFirestore(dispatch);
    }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [clickedIcon, setClickedIcon] = useState('home');
  
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode);
      return newMode;
    });
  };

  const onCreate = async ( date, content ) => {

    const docRef = await addDoc(collection(db, 'todoItem'), {
      date: new Date(date).getTime(),
      content: content,
      finish: false,
    });
    
    dispatch(createTodo( date, content, docRef.id));
  };

  const onFinish = async (clickedItem) => {
    const todoItemRef = doc(db, 'todoItem', clickedItem.id);
    await setDoc(todoItemRef, finishTodo(clickedItem).data, { merge: true } );
  
    dispatch(finishTodo(clickedItem));
  };

  const onRemove = async (targetId) => {
    const todoItemRef = doc(db, 'todoItem', targetId);
    await deleteDoc(todoItemRef);

    dispatch(removeTodo(targetId));
  };

  const onEdit = async (clickedItem, content) => {
    const todoItemRef = doc(db, 'todoItem', clickedItem.id);
    await setDoc(todoItemRef, editTodo(clickedItem, content).data, { merge: true } );

    dispatch(editTodo(clickedItem, content));
  };

  useEffect(() => {
    const localIsDarkMode = localStorage.getItem("isDarkMode");
    if (localIsDarkMode !== null) {
      setIsDarkMode(localIsDarkMode === "true");
    }
  }, []);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <TodoStateContext.Provider value={data}>
    <TodoDispatchContext.Provider value={{
      onCreate,
      onFinish,
      onRemove,
      onEdit,
    }}>
    <ThemeProvider theme={theme}>
    <DarkModeContext.Provider value={isDarkMode}>
      <GlobalStyle />
      <BrowserRouter>
        <div className='App' >
          <ModeButton toggleDarkMode={toggleDarkMode} />
          <Header />
          <Routes>
            <Route path={PATH_URL.HOME} element={<Home />} />
            <Route path={PATH_URL.CALENDAR} element={<Calendar />} />
            <Route path={PATH_URL.GRAPH} element={<Graph />} />
          </Routes>
          <Footer clickedIcon={clickedIcon} setClickedIcon={setClickedIcon}/>
        </div>
      </BrowserRouter>
    </DarkModeContext.Provider>
    </ThemeProvider>
    </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export default App