import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { useAlert } from "../context/AlertContext";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const { showAlert } = useAlert();

  if (!post) {
    return <h2>Piatto non trovato</h2>;
  }

  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.description}</p>
      <p>{post.price}</p>
      <button onClick={() => showAlert(`Hai selezionato "${post.title}"!`)}>
        Mostra Alert
      </button>
    </div>
  );
};

export default PostDetail;
