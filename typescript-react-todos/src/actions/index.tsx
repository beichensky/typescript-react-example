import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../constants';
import { VisibilityFilters } from '../types';


let nextTodoId = 0;

export interface IAddTodoAction {
    id: number;
    text: string;
    type: ADD_TODO;
}

export interface IToggleTodoAction {
    id: number;
    type: TOGGLE_TODO;
}

export interface ISetVisibilityFilterAction {
    filter: VisibilityFilters;
    type: SET_VISIBILITY_FILTER;
}

export type TodoAction = IAddTodoAction | IToggleTodoAction;

export const addTodo = (text: string): IAddTodoAction => ({
    id: nextTodoId++,
    text,
    type: ADD_TODO,
})

export const toggleTodo = (id: number): IToggleTodoAction => ({
    id,
    type: TOGGLE_TODO
})

export const setVisibilityFilter = (filter: VisibilityFilters): ISetVisibilityFilterAction => ({
    filter,
    type: SET_VISIBILITY_FILTER
})


