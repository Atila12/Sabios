/*import styles from './Post.module.css';

//hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchDocument("posts", id)

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Este post trata sobre</h3>
                    {post.tagsArray.map((tag) => (
                        <p key={tag}>
                            <span>#</span>
                            {tag}
                        </p>
                    ))};

                </>
            )}
        </div>
    );
};

export default Post*/

import styles from './Post.module.css';
// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  // fallback seguro para tags
  const tags = post?.tagsArray ?? [];

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}

      {post && (
        <>
          <h1>{post.title}</h1>

          {!!post.image && (
            <img src={post.image} alt={post.title ?? 'Imagem do post'} />
          )}

          {!!post.body && <p>{post.body}</p>}

          <h3>Este post trata sobre</h3>
          <div className={styles.tags}>
          {tags.length > 0 && tags.map((tag) => (
            <p key={tag}>
              <span>#</span>{tag}
            </p>
          ))}
          </div>

        </>
      )}
    </div>
  );
};

export default Post;