'use client';
import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, prettier/prettier
  export interface DefaulTheme extends Theme { }
}
