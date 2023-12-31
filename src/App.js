import { useEffect, useState } from "react";
import getData from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setPosts(res);
    });
  }, []);
  return (
    <div>
      <p>First Testing App </p>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
