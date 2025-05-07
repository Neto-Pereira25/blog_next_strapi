'use client';

import Link from 'next/link';
import { PaginationData } from '../../domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPost,
  category,
  previousPage,
  postPerPage,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postPerPage < postPerPage + numberOfPost;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link
            as={previousLink}
            href={`/post/page/${previousPage}/${category}`}
          >
            Previous
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href={`/post/page/${nextPage}/${category}`}>
            Next
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
