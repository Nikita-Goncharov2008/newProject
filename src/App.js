import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Dialogs';
import { Route, Routes } from 'react-router-dom';
// import Massage from './components/Messages/UserMassages/Massage';

function App(props) {
  return (
    <div className='container'>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Profile ProfilePage={props.data.ProfilePage} makePost={props.makePost}/>}/>
        <Route path='/profile' element={<Profile ProfilePage={props.data.ProfilePage} makePost={props.makePost}/>}/>
        <Route path='/messages' element={<Messages DioalogsPage={props.data.DioalogsPage}/>} />
      </Routes>

    </div>
  );
}
export default App;


// сделать dialogsPage из data
