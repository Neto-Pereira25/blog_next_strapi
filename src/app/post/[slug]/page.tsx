import { notFound } from 'next/navigation';
import { Post } from '../../../containers/Post/page';
import { getPost } from '../../../data/posts/get-post';

type DynamicPostProps = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicPost({ params }: DynamicPostProps) {
  try {
    const { slug } = await params;

    const posts = await getPost(slug);

    if (!posts || posts.length === 0) {
      return notFound();
    }
    const post = posts[0];

    return <Post post={post} />;
  } catch (error) {
    console.log('Deu erro:', error);
  }
}
