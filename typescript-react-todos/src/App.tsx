import * as React from 'react';

import AddTodo from './container/addTodo';
import VisibleTodoList from './container/visibleTodoList';
import Footer from './components/footer';

// import logo from './../logo.svg';
import './App.css';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;
