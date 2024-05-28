import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './data/Data'



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rendering=(Data)=>{
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App data={store._Data} rerenderMasseges={store.rerenderMasseges.bind(store)} sendMassege={store.sendMassege.bind(store)} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  </BrowserRouter>
);
}

rendering(store.getState())

store.subscribe(rendering)   

reportWebVitals();
