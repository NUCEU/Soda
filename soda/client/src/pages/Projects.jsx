export default function Projects() {
  return (
    <section id='projects' className='section container'>
      <h2>Projects</h2>

      <article className='card'>
        <header className='card-head'>
          <h3 className='card-title'>대형 공공기관 반응형 웹 고도화</h3>
          <p className='muted'>2024.03 – 2024.09</p>
        </header>
        <p>HTML/SCSS 컴포넌트화, 접근성 개선, Edge/Chrome 표준화.</p>
        <ul className='bullet'>
          <li>SCSS 7-1 구조 도입</li>
          <li>ARIA/대체텍스트/포커스 트랩</li>
          <li>브레이크포인트 체계화</li>
        </ul>
      </article>

      {/* 필요 시 카드 계속 추가 */}
    </section>
  );
}
