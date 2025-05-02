'use client';

import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.98;
  }
`;

export const PostCardConver = styled.div`
  margin-bottom: ${() => theme.spacings.small};

  img {
    width: 100%;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  ${() => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
