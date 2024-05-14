import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Diologs';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='container'>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Profile}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/messages' Component={Messages}/>
      </Routes>

    </div>
  );
}

export default App;
