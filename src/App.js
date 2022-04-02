import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import AudenceComments from "./components/AudenceComments";
import Comments from "./components/Comments";
import Header from "./components/Header";
import Home from "./components/Home";
import Posts from "./components/Posts";
import UserPosts from "./components/UserPosts";
import useFatchData from "./hooks/useFatchData";
 
export const PostsContext = createContext([]);

function App() {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
  const [posts] = useFatchData(postsUrl);
  const [comments] = useFatchData(commentsUrl)
  return (
    <PostsContext.Provider value={{posts,comments}}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/userPost/:userId" element={<UserPosts />} />
          <Route
            path="/audenceComments/:postId"
            element={<AudenceComments />}
          />
        </Routes>
      </div>
    </PostsContext.Provider>
  );
}

export default App;
