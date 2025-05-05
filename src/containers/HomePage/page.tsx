import Head from 'next/head';
import { Footer } from '../../components/Footer/page';
import { Header } from '../../components/Header/page';
import { MainContainer } from '../../components/MainContainer/page';
import { PostCard } from '../../components/PostCard/page';
import { PostData } from '../../domain/posts/post';
import { Container } from './styled';
import { SITE_NAME } from '../../app/config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
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
      </MainContainer>
      <Footer />
    </>
  );
}
