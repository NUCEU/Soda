import { useEffect, useRef, useState } from 'react';

export default function A11yModal() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const openBtn = document.getElementById('a11y-modal-open');
    if (!openBtn) return;
    const onClick = () => {
      triggerRef.current = document.activeElement;
      setOpen(true);
    };
    openBtn.addEventListener('click', onClick);
    return () => openBtn.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const root = panelRef.current;

    const focusable = root.querySelectorAll('a[href], button, textarea, input, select, summary, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const prev = triggerRef.current;

    first && first.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === 'Tab') {
        if (!focusable.length) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    root.addEventListener('keydown', onKeyDown);

    return () => {
      root.removeEventListener('keydown', onKeyDown);
      if (prev && prev.focus) prev.focus();
    };
  }, [open]);

  if (!open) {
    // 트리거는 페이지 아무 곳이나: <button id="a11y-modal-open">접근성 데모</button>
    return null;
  }

  return (
    <div className='modal' role='dialog' aria-modal='true' aria-labelledby='a11y-title'>
      <div className='modal-backdrop' onClick={() => setOpen(false)} aria-hidden='true' />
      <div className='modal-panel' ref={panelRef}>
        <h2 id='a11y-title'>접근성 데모</h2>
        <p>Esc로 닫기, Tab/Shift+Tab 포커스 트랩, 닫은 뒤 포커스 복귀를 확인.</p>
        <div className='modal-actions'>
          <a className='btn' href='#main'>
            본문으로 이동
          </a>
          <button className='btn' onClick={() => alert('예시 동작')}>
            예시 버튼
          </button>
          <button className='btn' onClick={() => setOpen(false)}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
