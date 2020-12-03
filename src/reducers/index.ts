import { combineReducers } from 'redux';
import { todosReducers } from './todos';
import { Todo } from '../actions/index';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers({
  todos: todosReducers,
});
