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
      <NavBar friends={props.data.NavBarPart.friends}/>
      <Routes>
        <Route path='/'element={<Profile dispatch={props.dispatch} ProfilePage={props.data.ProfilePage} newPostText={props.data.ProfilePage.newPostText} />}/>
        <Route path='/profile' element={<Profile dispatch={props.dispatch} newPostText={props.data.ProfilePage.newPostText} ProfilePage={props.data.ProfilePage} />}/>
        <Route path='/messages' element={<Messages dispatch={props.dispatch} newMassage={props.data.DioalogsPage.newMassage} DioalogsPage={props.data.DioalogsPage} />} />
      </Routes>

    </div>
  );
}
export default App;


// сделать dialogsPage из data
