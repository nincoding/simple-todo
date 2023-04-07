import { useState, useEffect, useRef, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle';
// contant
import { PATH_URL, LOCAL_STORAGE_KEY } from "./constants/stringValues";

//store
import { TodoDispatchContext, TodoStateContext, DarkModeContext } from "./contexts/TodoContext";
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

function App() {

  const dataId = useRef(1);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [clickedIcon, setClickedIcon] = useState('home');
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [ data, dispatch ] = useReducer(reducer, [],
    (initialState) => {
      const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (localData) {
        return JSON.parse(localData);
      }
      return initialState;
  });

  const onCreate = ( date, content ) => {
    console.log(date);
    if ( date === undefined ) {
      date = new Date();
      dispatch(createTodo( date, content, dataId.current));
      dataId.current += 1;
    } else {
            dispatch(createTodo( date, content, dataId.current));
      dataId.current += 1;
    }
  };

  const onFinish = (targetId) => {
    dispatch(finishTodo(targetId));
  };

  const onRemove = (targetId) => {
    dispatch(removeTodo(targetId));
  };

  const onEdit = (targetId, date, content) => {
    dispatch(editTodo(targetId, date, content));
  };

  useEffect(() => {
    const localIsDarkMode = localStorage.getItem("isDarkMode");
    if (localIsDarkMode !== null) {
      setIsDarkMode(localIsDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <TodoStateContext.Provider value={data}>
    <TodoDispatchContext.Provider value={{
      onCreate,
      onFinish,
      onRemove,
      onEdit,
    }}>
    <DarkModeContext.Provider value={isDarkMode}>
    <GlobalStyle isDarkMode={isDarkMode}/>
    <BrowserRouter>
    <div className={`App ${isDarkMode ? "dark" : ""}`} >
      <ModeButton toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
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
    </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export default App