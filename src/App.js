import { Route, Routes } from 'react-router-dom';
import './assets/css/global.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
