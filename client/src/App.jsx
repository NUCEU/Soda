import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import A11yModal from './components/A11yModal.jsx';
import Home from './pages/Home.jsx';

import Contact from './pages/Contact.jsx';
//import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import './styles/css/main.css';

function RouteFocus() {
  // 라우트 변경 시 <main>으로 포커스 이동 (접근성)
  const loc = useLocation();
  useEffect(() => {
    const main = document.getElementById('main');
    if (main?.focus) main.focus();
  }, [loc.pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* 키보드 Tab포커스*/}
      <a href='main' className='skip-link'>
        본문 바로가기
      </a>
      <Nav />

      <RouteFocus />

      {/* 페이지 공통 메인 컨테이너 */}
      <main id='main' tabIndex='-1' className='site-main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={'/projects'} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      {/* 어디서든 띄울 수 있는 접근성 모달 (데모 버튼은 각 페이지에 배치) */}
      <A11yModal />
      <Footer />
    </BrowserRouter>
  );
}
