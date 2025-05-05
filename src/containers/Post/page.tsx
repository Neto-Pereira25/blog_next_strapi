import Head from 'next/head';
import { Comments } from '../../components/Comments/page';
import { Footer } from '../../components/Footer/page';
import { Header } from '../../components/Header/page';
import { Heading } from '../../components/Heading/page';
import { MainContainer } from '../../components/MainContainer/page';
import { PostContainer } from '../../components/PostContainer/page';
import { PostCover } from '../../components/PostCover/page';
import { PostDetails } from '../../components/PostDetails/page';
import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../app/config/app-config';
import { removeHtml } from '../../utils/remove-html';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.createdAt}
        />
        <PostContainer content={post.content} />
        <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
};
