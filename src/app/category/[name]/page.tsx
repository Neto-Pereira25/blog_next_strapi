import HomePage from '../../../containers/HomePage/page';
import { getAllPostsOfThisCategory } from '../../../data/posts/get-all-posts-of-this-category';

export type CategoryProps = {
  params: Promise<{ name: string }>;
};

export default async function Category({ params }: CategoryProps) {
  const { name } = await params;

  const posts = await getAllPostsOfThisCategory(name);

  return <HomePage posts={posts} category={name} />;
}
