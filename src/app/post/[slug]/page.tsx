import { notFound } from 'next/navigation';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { getPost } from '../../../data/posts/get-post';

type DynamicPostProps = {
  params: { slug: string };
};

export default async function DynamicPost({ params }: DynamicPostProps) {
  const { slug } = await params;

  const posts = await getPost(slug);

  if (!posts || posts.length === 0) {
    return notFound();
  }

  const post = posts[0];

  return (
    <>
      <p>{post.title}</p>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts('pagination[limit]=30');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
