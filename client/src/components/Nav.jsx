import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef(null);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // ESC로 닫기
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // 열릴 때 첫 링크로 포커스 이동 + 바디 스크롤 잠금
  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <nav className={`nav ${isOpen ? 'is-open' : ''}`} aria-label='주요 메뉴'>
      <div className='container'>
        <button aria-label='메뉴버튼' className={`menu-btn ${isOpen ? 'open' : ''}`} aria-expanded={isOpen} aria-controls='global-nav' onClick={toggleMenu} type='button'>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <section id='global-nav' role='navigation' aria-hidden={!isOpen}>
          <ul className='nav-list'>
            <li>
              <NavLink to='/' onClick={closeMenu} ref={firstLinkRef}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              {/* <NavLink to='/'>Projects</NavLink> */}
              <a
                href='#projects'
                onClick={(e) => {
                  e.preventDefault();
                  // 같은 페이지 앵커 이동
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  // 앵커 스크롤 직후 포커스
                  requestAnimationFrame(() => {
                    document.getElementById('projects')?.focus({ preventScroll: true });
                  });
                  closeMenu();
                }}
              >
                Projects
              </a>
            </li>{' '}
            {/* 같은 페이지 섹션 이동 -- > project */}
          </ul>
          <article>
            <div className='aboutme'>
              <strong className='text-rotate'>ABOUT ME</strong>
              <a href='/about'>{/* <img src='/client/public/about_p.JPG' alt='about 대표이미지' /> */}</a>
            </div>
            <div className='contact'>
              <strong className='text-rotate'>CONTACT</strong>
              <ul>
                <li>
                  <strong>EMAIL</strong>
                  <span>url02tue@gmail.com</span>
                </li>
                <li>
                  <strong>KAKAO</strong>
                  <span>ladyliki@naver.com</span>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </nav>
  );
}
