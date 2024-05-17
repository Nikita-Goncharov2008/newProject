import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let chatNames=[
  {name:'Ilon Mask', id:1},
  {name:'Donald Tramp', id:2},
  {name:'Bill Geyts', id:3},
]


let postProp=[
  {name:'tolya', text:'hello'},
  {name:'glasha', text:'hello, how are you'},
  {name:'kiril', text:'fine'}
]

let diologsNames=[
  {text:'Привет, как дела?', id:1},
  {text:'Го завтра на марс?', id:2},
  {text:'Жду мой чип', id:3}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App postProp={postProp} chatNames={chatNames} diologsNames={diologsNames}/>
    </React.StrictMode>
  </BrowserRouter>

);
reportWebVitals();
