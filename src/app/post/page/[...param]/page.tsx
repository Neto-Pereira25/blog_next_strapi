import { Metadata } from 'next';
import HomePage from '../../../../containers/HomePage/page';
import { countAllPosts } from '../../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../../data/posts/get-all-posts';
import { PaginationData } from '../../../../domain/posts/pagination';
import { SITE_NAME } from '../../../config/app-config';

export type PageProps = {
  params: Promise<{ param?: string[] }>;
};

export type PaginationPageProps = {
  params: Promise<{
    category: string;
    pagination: PaginationData;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { param } = await params;
  const [page, category = ''] = param;
  const pageNumber = Number(page);
  const postPerPage = 6;
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

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { param } = await params;

  const [page, category = ''] = param;
  const pageNumber = Number(page);

  const nextPage = pageNumber + 1;
  console.log('metadata-category: ', category);

  if (!category) {
    return {
      title: `${SITE_NAME} ${nextPage ? `- Página ${nextPage - 1}` : ''}`,
      description: 'Este é meu blog de tecnologia feito com Next + Strapi',
    };
  }

  return {
    title: `${category ? `${category} - ${SITE_NAME}` : SITE_NAME} ${nextPage ? ` - Página ${nextPage - 1}` : ''}`,
    description: `Este é meu blog de tecnologia feito com Next + Strapi`,
  };
}
