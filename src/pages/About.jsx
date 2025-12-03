export default function About() {
  return (
    <section id='about' className='section container'>
      <h2>About</h2>

      <article className='card'>
        <header className='card-head'>
          <h3 className='card-title'>도대체 ✘✘이 무엇이길래</h3>
          <p className='muted'>2024.03 – 2024.09</p>
        </header>
        <ul>
          <li>고슴도치</li>
          <li>수박</li>
          <li></li>
        </ul>
        <p>소통하는 일을 했다</p>
        <p>그동안 내가 선택한 일들</p>
        <p>왜 같은 일을 하는데 경험치상승률이 불공평한거 같지?</p>
        <ul className='bullet'>
          <li>한눈에 보는 것을 좋아한다</li>
          <li>꼼꼼하다</li>
          <li>귀로 듣고 분석하고 시각화한다</li>
        </ul>
      </article>

      {/* 필요 시 카드 계속 추가 */}
    </section>
  );
}
