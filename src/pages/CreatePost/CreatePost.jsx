import styles from './CreatePost.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { divide } from 'firebase/firestore/pipelines';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.create_post}>
      <h2>
        Criar post
      </h2>
      <p>Escreva sobre o que quiser e compartilhe</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input type="Text"
            name="title"
            requared
            placeholder='Pense num bom titulo...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Url da imagem:</span>
          <input type="Text"
            name="image"
            requared
            placeholder='insira uma imagem que representa seu post'
            onChange={(e) => setImage(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Conteudo:</span>
          <textarea name='body'
            required
            placeholder='Insira o conteudo do post'
            onChange={(e) =>
              setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input type="Text"
            name="Tags"
            requared
            placeholder='insira as tags separadas por virgula'
            onChange={(e) => setTags(e.target.value)}
            value={title}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {/*{!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
            </button>)}
        {error && <p className="error">{error}</p>}*/}

      </form>
    </div>
  );
};

export default CreatePost;
