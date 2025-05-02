'use client';

import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.header`
  ${() => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}

  a {
    color: ${() => theme.colors.white};
  }
`;
