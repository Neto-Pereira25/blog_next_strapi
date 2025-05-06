import HomePage from '../../../../containers/HomePage/page';
import { getAllPosts } from '../../../../data/posts/get-all-posts';

export type PageProps = {
  params: Promise<{ param?: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { param } = await params;
  const [pageNumber, category] = param;

  const posts = await getAllPosts(
    `sort=id:desc&pagination[start]=${pageNumber}&pagination[limit]=3`,
  );

  console.log(pageNumber, category);

  if (!posts.length) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} />;
}
