import { useState } from "react";
import { useAlert } from "../context/AlertContext";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { showAlert } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulazione API
    setTimeout(() => {
      showAlert(`Il piatto "${title}" è stato aggiunto con successo!`);
      setTitle("");
      setContent("");
    }, 500);
  };

  return (
    <div>
      <h2>Aggiungi un Nuovo Piatto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome del piatto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrizione"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Aggiungi Piatto</button>
      </form>
    </div>
  );
};

export default AddPost;
