import PostHeader from './../components/PostHeader';
import PostBody from './../components/PostBody';
import Layout from './../components/Layout';
import Post from '../components/Post';
import posts from '../api/posts';

function App() {
    let postElements = [];

    // for (let i = 0; i < posts.length; i++) {
    //     let post = posts[i];
    //     postElements[i] = (
    //         <h1>Titulo do post: <b>{post.slug}</b></h1>
    //     );
    // }

    return (
        <>
            <Layout showSideBar>
                {posts.map((post) => {
                    return (
                        <Post>
                            <PostHeader
                                authorName={post.author.name}
                                authorProfile={post.author.profile_path}
                                authorUsername={post.author.username}
                                postDate={post.date}
                            />
                            <PostBody
                                content={post.content}
                                title={post.title}
                                image={post.image_path}
                            />
                        </Post>
                    )
                })}
            </Layout>
        </>
    );
}

export default App;
