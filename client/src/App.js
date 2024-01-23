import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/home';
import { About } from './components/pages/About/about';
import { Price } from './components/pages/Price/price';
import { Contact } from './components/pages/Contact/contact';
import { NotFound } from './components/pages/NotFound/notFound';
import { Main } from './components/layout/Main/main';
import { Information } from './components/pages/Information/information';
import { useEffect } from 'react';
import { config } from '../../client/src/clientConfig';

export function App() {
  useEffect(() => {
    document.title =
      'Gabinet Psychologiczny, Seksuolog, Terapeuta, Psycholog | Instytut Terapii Łódź';
  }, []);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${config.reCaptchaSiteKey}`;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/information' element={<Information />} />
        <Route path='/about' element={<About />} />
        <Route path='/price' element={<Price />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Main>
  );
}
