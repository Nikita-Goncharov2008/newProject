import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {makePost} from './data/Data'



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rendering=(Data)=>{
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App data={Data} makePost={makePost}/>
    </React.StrictMode>
  </BrowserRouter>
);
}
rendering()
reportWebVitals();
