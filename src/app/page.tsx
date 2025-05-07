import { Metadata } from 'next';
import HomePage from '../containers/HomePage/page';
import { getAllPosts } from '../data/posts/get-all-posts';
import { SITE_NAME } from './config/app-config';

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    'Este é meu blog de tecnologia feito com Next, Disqus para comentários e Strapi para API',
};

export default async function Home() {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=6',
  );

  return <HomePage posts={posts} />;
}
