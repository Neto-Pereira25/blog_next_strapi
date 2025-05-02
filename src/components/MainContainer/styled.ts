'use client';

import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.main`
  ${() => css`
    max-width: 96rem;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;
