import './App.css';
import Post from './components/Post';

function App() {
  return (
    <>
     <Post author="Atara Shtiglitz" content="This is my very first React application!" />
    <Post author="Alex Smith" content="Learning how to use Props is quite interesting." />
    <Post author="Shira Keler" content="Don't forget the importance of Component Reuse." />
    </>
     
    
  );
}

export default App;