import Link from 'next/link';
import { SITE_NAME } from '../../app/config/app-config';
import { Container } from './styled';

export const Header = () => {
  return (
    <Container>
      <Link href="/">{SITE_NAME}</Link>
    </Container>
  );
};
