'use client';

import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.h2`
  ${() => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large} 0;
    text-align: center;
  `}
`;
