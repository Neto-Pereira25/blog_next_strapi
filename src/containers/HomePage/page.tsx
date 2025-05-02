import { Header } from '../../components/Header/page';
import { MainContainer } from '../../components/MainContainer/page';
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
            <h2 key={post.slug}>{post.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
