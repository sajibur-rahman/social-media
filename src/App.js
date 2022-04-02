import { Route, Routes } from 'react-router-dom';
import './assets/css/global.css';
import AudenceComments from './components/AudenceComments';
import Comments from './components/Comments';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import UserPosts from './components/UserPosts';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/comments' element={<Comments/>}/>
        <Route path='/userPost/:userId' element={<UserPosts/>}/>
        <Route path='/audenceComments/:postId' element={<AudenceComments/>} />
      </Routes>
    </div>
  );
}

export default App;
