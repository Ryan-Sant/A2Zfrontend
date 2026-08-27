import logo from './logo.svg';
import './App.css';
import Home from './pages/home';

import { BrowserRouter,Router,Routes,Route } from 'react-router';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes >
        <Route path='/' element={<Home/>} />
      </Routes >
      </BrowserRouter >


    </div>
  );
}

export default App;
