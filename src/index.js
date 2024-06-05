import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './data/Store.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rendering=(Data)=>{
  console.log(Data)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App data={Data} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  </BrowserRouter>
);
}

rendering(store.getState())

store.subscribe(()=>{rendering(store.getState())})   

reportWebVitals();