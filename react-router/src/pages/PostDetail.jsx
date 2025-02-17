import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post non trovato</h2>;
  }

  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.description}</p>
      <p>{post.price}</p>
    </div>
  );
};

export default PostDetail;
