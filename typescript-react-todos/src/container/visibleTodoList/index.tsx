import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleTodo } from '../../actions';
import TodoList from '../../components/todoList';
import { Todo } from '../../types';
import { IStoreState, VisibilityFilters } from '../../types';


const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = (state: IStoreState): { todos: Todo[] } => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch): { toggleTodo: (id: number) => void } => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
