import { redirect } from 'next/navigation';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import HomePage from '../../../containers/HomePage/page';

export default async function Page() {
  const posts = await getAllPosts();

  if (!posts || posts.length <= 0) return redirect('/');

  return <HomePage posts={posts} />;
}
