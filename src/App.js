import { Route, Routes } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import UserPosts from './components/UserPosts/UserPosts';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:userId' element={<UserPosts/>}/>
        <Route path='/comments/:postId' element={<Comments/>}/>
      </Routes>
    </div>
  );
}

export default App;
