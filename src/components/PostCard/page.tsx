import Link from 'next/link';
import { Container, PostCardConver, PostCardHeading } from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardConver>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <img src={cover} alt={title} />
        </Link>
      </PostCardConver>
      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
};
