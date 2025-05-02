import { PostData } from '../domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch(
    'https://blog-api-strapi.onrender.com/api/posts/?populate=*',
    { cache: 'force-cache' }, // equivalente a getStaticProps
  );
  const jsonPosts = await posts.json();
  return jsonPosts.data;
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.slug}>{post.title}</h2>
      ))}
    </div>
  );
}
