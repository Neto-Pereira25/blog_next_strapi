import Link from 'next/link';
import { Container } from './not-found-styled';

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Oops! Página não encontrada...</p>
      <div>
        <Link href="/">Retornar ao Início</Link>
      </div>
    </Container>
  );
}
