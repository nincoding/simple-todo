import { INIT, CREATE, REMOVE, EDIT, FINISH } from '../constants/actionTypes';

export const initTodo = ( todoList ) => ({
  type: INIT,
  data: todoList
});

export const createTodo = ( date, content, dataId ) => ({
  type: CREATE,
  data: {
    id: dataId,
    date: new Date(date).getTime(),
    content: content,
    finish: false,
    },
});

export const removeTodo = ( targetId ) => ({
  type: REMOVE,
  targetId,
});

export const editTodo = ( clickedItem, content ) => ({
  type: EDIT,
  data: {
    id : clickedItem.id,
    date: new Date(clickedItem.date).getTime(),
    content,
    finish: clickedItem.finish,
  }
});

export const finishTodo = ( clickedItem ) => ({
  type: FINISH,
  data: {
    id: clickedItem.id,
    date: clickedItem.date,
    content: clickedItem.content,
    finish: !clickedItem.finish,
  }
})