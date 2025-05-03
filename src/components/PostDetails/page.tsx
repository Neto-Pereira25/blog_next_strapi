import { Date } from '../Date/page';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado por <Date date={date} />
    </Container>
  );
};
