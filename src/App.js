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
        <Route path='/'element={<Profile rerenderUI={props.rerenderUI} ProfilePage={props.data.ProfilePage} newPostText={props.data.ProfilePage.newPostText} makePost={props.makePost}/>}/>
        <Route path='/profile' element={<Profile rerenderUI={props.rerenderUI} newPostText={props.data.ProfilePage.newPostText} ProfilePage={props.data.ProfilePage} makePost={props.makePost}/>}/>
        <Route path='/messages' element={<Messages newMassage={props.data.DioalogsPage.newMassage} rerenderMasseges={props.rerenderMasseges} DioalogsPage={props.data.DioalogsPage} sendMassege={props.sendMassege}/>} />
      </Routes>

    </div>
  );
}
export default App;


// сделать dialogsPage из data
