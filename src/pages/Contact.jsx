import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState({ error: '', ok: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ error: '이메일 형식을 확인하세요.', ok: '' });
      return;
    }
    // 서버 요청 생략(예시)
    setStatus({ error: '', ok: '메시지가 전송되었습니다.' });
    setMsg('');
  };

  return (
    <section className='section container'>
      <h2>Contact</h2>

      <form onSubmit={submit} noValidate>
        <label htmlFor='email'>이메일</label>
        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby='emailHelp statusText' required />
        <div id='emailHelp' className='muted'>
          회사 이메일을 입력해주세요.
        </div>

        <label htmlFor='message'>메시지</label>
        <textarea id='message' rows='4' value={msg} onChange={(e) => setMsg(e.target.value)} />

        {/* 상태 알림 영역 */}
        <div id='statusText' role='status' aria-live='polite' style={{ marginTop: 8 }}>
          {status.error && <p>{status.error}</p>}
          {status.ok && <p>{status.ok}</p>}
        </div>

        <button type='submit' className='btn' style={{ marginTop: 12 }}>
          보내기
        </button>
      </form>
    </section>
  );
}
