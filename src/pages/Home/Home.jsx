import styles from "./Home.module.css";
//hooks
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";


//components home lista  postagem recente s e possui  um campo de busca (ainda não conectado à consulta)
import PostDetail from "../../components/PostDetail";
const Home = () => {
    // Estado local para armazenar o texto digitado no campo de busca
    const [query, setQuery] = useState("");

    //handler customizado que busca documentos  da coleção "posts"
    // Renomeamos "documents" para "posts" via destructuring por legibidade
    //"loading" indica  se a busca ainda está em andamento.
    const {documents: posts, loading} = useFetchDocuments("posts");
    const navigate = useNavigate()
    //Handler do submit do formulário de busca
    // Por enquanto, apenas previne o reload da pagina; a logica de busca pode ser adicionada depois

    const handleSubmit = (e) => {
        e.preventDefault();

        if(query.trim()) {
            // use encodeURIComponent para segurança
            return navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
        //TODO: implementar navegação ou filtro por tags  usando "query"
        //Exemplo de navegação: navigate(`/search?q=${encodeURICcomponent(query)}`)
    };

    return (
        <div className={styles.home}>
            {/*Titulo da seção*/}
            <h1>Postagens recentes</h1>
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input 
                type="text"
                placeholder="Ou busque por tags..."
                onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-dark">Pesquisar</button>
            </form>
            <div>
                {/* Enquanto estiver carregando, exibe um feedback visual */}
                {loading && <p>Carregando...</p>}
                {posts.map((post) => <PostDetail key={post.id} post={post} />)}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encotrados posts</p>
                        <Link to="/post/create" className="btn">Criar primeiro post</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
