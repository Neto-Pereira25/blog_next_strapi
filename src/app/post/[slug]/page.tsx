import { notFound } from 'next/navigation';
import { Post } from '../../../containers/Post/page';
import { getPost } from '../../../data/posts/get-post';
import { Metadata } from 'next';
import { SITE_NAME } from '../../config/app-config';
import { removeHtml } from '../../../utils/remove-html';

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

export async function generateMetadata({
  params,
}: DynamicPostProps): Promise<Metadata> {
  const { slug } = await params;

  const posts = await getPost(slug);

  return {
    title: `${posts[0].title} - ${SITE_NAME}`,
    description: `${removeHtml(posts[0].content)}`,
  };
}
