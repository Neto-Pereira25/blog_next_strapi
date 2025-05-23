import Head from 'next/head';
import { SITE_NAME } from '../../app/config/app-config';
import { Footer } from '../../components/Footer/page';
import { Header } from '../../components/Header/page';
import { MainContainer } from '../../components/MainContainer/page';
import { Pagination } from '../../components/Pagination/page';
import { PostCard } from '../../components/PostCard/page';
import { PaginationData } from '../../domain/posts/pagination';
import { PostData } from '../../domain/posts/post';
import { Category, Container } from './styled';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Este é meu blog de tecnologia feito com Next, Disqus para comentários e Strapi para API"
        />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link href={`/post/page/1`}>Ver todos os posts</Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
