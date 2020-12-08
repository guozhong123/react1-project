import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {router} from './router'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <Router>
    {/* <App /> */}
    {
      router.map((item)=>{
      return <li key={item.path}>{item.component}</li>
      })
    }
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
