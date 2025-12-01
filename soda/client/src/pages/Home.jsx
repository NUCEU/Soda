export default function Home() {
  return (
    <div className='home'>
      <section id='intro'>
        <ul>
          <li>INTUITIVE UI</li>
          <li>USER ENGAGEMENT</li>
          <li>PERFORMANCE</li>
          <li>IMPROVEMENT</li>
        </ul>
      </section>

      <section id='projects' tabIndex='-1' className='section_'>
        <h2>Projects</h2>

        <article className='card'>
          <header className='card-head'>
            <h3 className='card-title'>두등</h3>
            <p className='muted'>2025.08 – 2025.08</p>
          </header>
          <p>skills</p>
          <ul className='chips'>
            <li className='chip'>HTML5</li>
            <li className='chip'>CSS/SCSS</li>
            <li className='chip'>JAVASCRIPT</li>
          </ul>
          <ul className='bullet'>
            <li>2등신 캐릭터 이미지 마켓</li>
            <li>로그인/결제/게시글</li>
            <li>
              <a href='ㅇ#'>보러가기</a>
            </li>
          </ul>
        </article>

        <article className='card'>
          <header className='card-head'>
            <h3 className='card-title'>js를 활용한 플래시게임 </h3>
            <p className='muted'>2025.08 – 2025.08</p>
          </header>
          <p>skills</p>
          <ul className='chips'>
            <li className='chip'>HTML5</li>
            <li className='chip'>CSS/SCSS</li>
            <li className='chip'>JAVASCRIPT</li>
          </ul>
          <ul className='bullet'>
            <li>SCSS 7-1 구조 도입</li>
            <li>ARIA/대체텍스트/포커스 트랩</li>
            <li>브레이크포인트 체계화</li>
          </ul>
        </article>

        {/* 언젠가 또 추가될 예정.. */}
      </section>

      {/* 모달 트리거 버튼 (전역 A11yModal이 감지) */}
      {/* <div className='container'>
        <button id='a11y-modal-open' type='button' className='btn' style={{ marginTop: 16 }}>
          접근성 데모(모달)
        </button>
      </div> */}
    </div>
  );
}
