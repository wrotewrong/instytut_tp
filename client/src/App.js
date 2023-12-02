import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/home';
import { About } from './components/pages/About/about';
import { Diagnostics } from './components/pages/Diagnostics/diagnostics';
import { Contact } from './components/pages/Contact/contact';
import { NotFound } from './components/pages/NotFound/notFound';
import { Main } from './components/layout/Main/main';
import { Information } from './components/pages/Information/information';

export function App() {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/information' element={<Information />} />
        <Route path='/about' element={<About />} />
        <Route path='/diagnostics' element={<Diagnostics />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Main>
  );
}
