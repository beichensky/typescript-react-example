import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addTodo } from '../../actions';


const AddTodo = ({ dispatch }: { dispatch: Dispatch }) => {
    let input: HTMLInputElement | null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input!.value.trim()) {
            return;
        }
        dispatch(addTodo(input!.value));
        input!.value = '';
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input ref={ node => input = node } />
                <button type="submit"> Add Todo </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);