import { useState, useEffect, useRef, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from "styled-components";
// contant
import { PATH_URL, LOCAL_STORAGE_KEY } from "./constants/stringValues";

//store
import { DarkModeContext, TodoDispatchContext, TodoStateContext } from "./contexts/TodoContext";
import { initTodo, createTodo, removeTodo, editTodo, finishTodo } from "./store/actions";
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
import { v4 as uuidv4 } from 'uuid';

// firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function App() {
  //const [data, dispatch] = useReducer(reducer, []);
  
  /*
  const [ data, dispatch ] = useReducer(reducer, [],
    (initialState) => {
      const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (localData) {
        return JSON.parse(localData);
      }
      return initialState;
  });
  */

  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const todoItemCollection = collection(db, 'todoItem');

    getDocs(todoItemCollection)
      .then((querySnapshot) => {
        const firestoreTodoItemList = [];
  
        querySnapshot.forEach((doc) => {
          firestoreTodoItemList.push({
            id: doc.id,
            date: new Date(doc.data().date).getTime(),
            content: doc.data().content,
            finish: doc.data().finish,
          });
        });
  
      dispatch(initTodo(firestoreTodoItemList));
    });
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
    
    if ( date === undefined ) {
      date = new Date();
      dispatch(createTodo( date, content, docRef.id));
    } else {
      dispatch(createTodo( date, content, docRef.id));
    }
  };

  const onFinish = async (clickedItem) => {
    const todoItemRef = doc(db, 'todoItem', clickedItem.id);
    await setDoc(todoItemRef, { finish: !clickedItem.finish }, { merge: true } );
  
    dispatch(finishTodo(clickedItem));
  };

  const onRemove = async (targetId) => {

    const todoItemRef = doc(db, 'todoItem', targetId);
    await deleteDoc(todoItemRef);

    dispatch(removeTodo(targetId));
  };

  const onEdit = async (clickedItem, content) => {
    const todoItemRef = doc(db, 'todoItem', clickedItem.id);
    await setDoc(todoItemRef, { 
      id : clickedItem.id,
      date: new Date(clickedItem.date).getTime(),
      content,
      finish: clickedItem.finish,
    }, { merge: true } );

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