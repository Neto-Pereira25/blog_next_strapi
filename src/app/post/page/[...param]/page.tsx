import HomePage from '../../../../containers/HomePage/page';
import { countAllPosts } from '../../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../../data/posts/get-all-posts';
import { PaginationData } from '../../../../domain/posts/pagination';

export type PageProps = {
  params: Promise<{ param?: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const { param } = await params;
  const [page, category = ''] = param;
  const pageNumber = Number(page);
  const postPerPage = 3;
  const startFrom = (pageNumber - 1) * postPerPage;

  const nextPage = pageNumber + 1;
  const previousPage = pageNumber - 1;

  const categoryQuery = category
    ? `filters[category][name][$containsi]=${category}`
    : '';
  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postPerPage}&${categoryQuery}`;
  const posts = await getAllPosts(urlQuery);

  const numberOfPost = Number(await countAllPosts(categoryQuery));
  const pagination: PaginationData = {
    nextPage,
    numberOfPost,
    postPerPage,
    previousPage,
    category,
  };

  console.log(pagination, numberOfPost);

  if (!posts.length) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} />;
}
