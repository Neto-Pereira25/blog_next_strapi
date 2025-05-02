import { Footer } from '../../components/Footer/page';
import { Header } from '../../components/Header/page';
import { MainContainer } from '../../components/MainContainer/page';
import { PostCard } from '../../components/PostCard/page';
import { PostData } from '../../domain/posts/post';
import { Container } from './styled';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
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
