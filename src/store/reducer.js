import { LOCAL_STORAGE_KEY } from '../constants/stringValues';
import { INIT, CREATE, REMOVE, EDIT, FINISH } from '../constants/actionTypes';

const reducer = ( state, action ) => {

  let newState = [];

  switch (action.type) {
    case INIT :
      return action.data;

    case CREATE :
      newState = [ action.data, ...state ];
      break;

    case REMOVE :
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    
    case EDIT :
      newState = state.map((item) =>
        item.id === action.data.id ? { ...item, content: action.data.content } : item
      );
      break;

    case FINISH :
      newState = state.map((item) => 
        item.id === action.data.id ? { ...item, finish: action.data.finish } : item
      );
      break;

    default :
    return state;
  }

  //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
  return newState;
};

export default reducer;