import { Footer } from '../../components/Footer/page';
import { Header } from '../../components/Header/page';
import { Heading } from '../../components/Heading/page';
import { MainContainer } from '../../components/MainContainer/page';
import { PostCover } from '../../components/PostCover/page';
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
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>

      <Footer />
    </>
  );
};
