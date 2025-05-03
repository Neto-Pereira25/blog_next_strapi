'use client';

import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.article`
  img {
    max-width: 100%;
  }

  p {
    margin: ${() => theme.spacings.medium} 0;
    text-align: justify;
  }

  ul,
  ol {
    margin: ${() => theme.spacings.medium};
  }

  pre {
    ${() => css`
      width: 100%;
      overflow-x: auto;
      background: ${theme.colors.lightGray};
      color: ${theme.colors.darkGray};
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${theme.font.sizes.medium};
    `}
  }
`;
