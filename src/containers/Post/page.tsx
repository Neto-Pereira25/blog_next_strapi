import { Footer } from '../../components/Footer/page';
import { Header } from '../../components/Header/page';
import { Heading } from '../../components/Heading/page';
import { MainContainer } from '../../components/MainContainer/page';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>

      <Footer />
    </>
  );
};
