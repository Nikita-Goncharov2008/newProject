import React from 'react';
import Data from './data/Data';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {makePost, sendMassege, rerenderUI, rerenderMasseges, subscribe} from './data/Data'



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rendering=(Data)=>{
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App data={Data} rerenderMasseges={rerenderMasseges} rerenderUI={rerenderUI} sendMassege={sendMassege} makePost={makePost}/>
    </React.StrictMode>
  </BrowserRouter>
);
}

rendering(Data)

subscribe(rendering)   

reportWebVitals();
