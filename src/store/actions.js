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

export const editTodo = ( targetId, date, content, finish ) => ({
  type: EDIT,
  data: {
    id : targetId,
    date: new Date(date).getTime(),
    content,
    finish: finish,
  }
});

export const finishTodo = ( targetId, finish ) => ({
  type: FINISH,
  data: {
    id: targetId,
    finish: !finish,
  }
})