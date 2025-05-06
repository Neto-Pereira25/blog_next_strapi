import { Metadata } from 'next';
import HomePage from '../../../containers/HomePage/page';
import { getAllPostsOfThisCategory } from '../../../data/posts/get-all-posts-of-this-category';
import { SITE_NAME } from '../../config/app-config';

export type CategoryProps = {
  params: Promise<{ name: string }>;
};

export default async function Category({ params }: CategoryProps) {
  const { name } = await params;

  const posts = await getAllPostsOfThisCategory(name);

  return <HomePage posts={posts} category={name} />;
}

export async function generateMetadata({
  params,
}: CategoryProps): Promise<Metadata> {
  const { name } = await params;

  return {
    title: `${name} - ${SITE_NAME}`,
    description: `Este são os posts da categoria: ${name}`,
  };
}
