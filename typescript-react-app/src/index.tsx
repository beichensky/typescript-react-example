import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';
import reducer from './reducer'; 
import registerServiceWorker from './registerServiceWorker';


// 1、创建 store
const store = createStore(reducer);

ReactDOM.render(
    // 2、然后使用react-redux的Provider将props与容器连通起来
    <Provider store={ store }>
        <App />
    </Provider> ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
