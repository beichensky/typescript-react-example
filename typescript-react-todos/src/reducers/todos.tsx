import { TodoAction } from '../actions';
import { ADD_TODO, TOGGLE_TODO } from '../constants';
import { Todo } from '../types';


const todos = (state: Todo[] = [], action: TodoAction) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo: Todo): Todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;
    }
}
  
export default todos;
