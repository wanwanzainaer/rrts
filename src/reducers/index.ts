import { combineReducers } from 'redux';
import { todosReducers } from './todos';
import { Todo } from './todos';
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers({
  todos: todosReducers,
});
