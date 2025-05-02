'use client';

import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem; /* text-4xl */
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem; /* text-xl */
    color: #4b5563; /* text-gray-600 */
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }

  a {
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 1.2rem;
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;
  }

  a:hover {
    opacity: 0.95;
  }
`;
