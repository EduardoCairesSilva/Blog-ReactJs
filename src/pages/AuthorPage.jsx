import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Post from "../components/Post";

export default function AuthorPage() {
    let params = useParams();
    console.log(params.username);

    return (
        <Layout>
            <Post>
                <h1 className="text-3xl">Página do: {params.username}</h1>
            </Post>
        </Layout>
    )
}