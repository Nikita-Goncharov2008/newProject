import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Diologs from './components/Messages/Diologs';

function App() {
  return (
    <div className='container'>
      <Header/>
      <NavBar/>
      {/* <Profile/> */}
      <Diologs/>
    </div>
  );
}

export default App;
