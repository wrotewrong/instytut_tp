import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';

export function Main({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
