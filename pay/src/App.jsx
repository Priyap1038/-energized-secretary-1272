// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Sendmoney from './components/Sendmoney';
import Login from './components/Login';
import Signup from './components/Signup';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/send/:id' element={<Sendmoney/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
