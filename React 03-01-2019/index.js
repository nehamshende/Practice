import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import App1 from './App1';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render (
    <h4>Hello, Neha!</h4>,
    document.getElementById('div1')
);

ReactDOM.render(<App1 />, document.getElementById('div2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

