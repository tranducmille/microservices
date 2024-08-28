import logo from './logo.svg';
import './App.css';
import PostCreate from './posts/PostCreate';
import PostList from './posts/PostList';

function App() {
  return (
    <div>
      <h1>Create Post</h1>
      <PostCreate/>
      <PostList/>
    </div>
  );
}

export default App;
