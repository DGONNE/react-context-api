import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const Posts = () => {
  return (
    <div>
      <h1>Lista Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
