import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/dress-code/dist/css/dress-code.min.css';

const Index=()=> {
    return <App />;
}

ReactDOM.render(<Index />, document.querySelector("#root"));