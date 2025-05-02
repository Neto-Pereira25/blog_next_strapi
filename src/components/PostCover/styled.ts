'use client';

import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.img`
  ${() => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
