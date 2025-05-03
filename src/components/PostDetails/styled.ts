'use client';

import styled from 'styled-components';
import { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  ${() => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium};
    font-style: italic;
  `}
`;
