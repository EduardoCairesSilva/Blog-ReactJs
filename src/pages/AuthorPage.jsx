import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Post from "../components/Post";
import posts from "../api/posts";

export default function AuthorPage() {
    let params = useParams();
    let post = posts.find((post) => {
        return post.author.username === params.username
    });

    return (
        <Layout>
            <Post>
                <h1 className="text-3xl">Author: {post.author.name}</h1>
            </Post>
        </Layout>
    )
}