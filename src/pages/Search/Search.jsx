import styles from "./Search.module.css";
// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

// components
import PostDetail from '../../components/PostDetail';
import { Link } from 'react-router-dom';

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts, loading, error } = useFetchDocuments("posts", search);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Ocorreu um erro: {String(error)}</p>;

    return (
        <div className={styles.search_container}>
            <h2>Search</h2>
            <div>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className="btn btn-dark">
                            Voltar
                        </Link>
                    </div>
                )}

                {posts && posts.map((post) =>
                    <PostDetail key={post.id} post={post} />
                )}
            </div>
        </div>
    );
};

export default Search;

