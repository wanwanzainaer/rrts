import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async (dispath: Dispatch) => {
  const response = await axios.get<Todo[]>(url);

  dispath<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: response.data,
  });
};
