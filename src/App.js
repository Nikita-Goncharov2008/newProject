import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='container'>
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
