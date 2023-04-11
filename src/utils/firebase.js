import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../../firebaseConfig";
import { initTodo, createTodo, removeTodo, editTodo, finishTodo } from "../store/actions";
import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc, getDocs, QuerySnapshot } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

export const syncTodoItemListStateWithFirestore = (dispatch) => {
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
}