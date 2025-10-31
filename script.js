// Fun demo button (keep original behavior)
const buttonEl = document.querySelector('.myButton');
if (buttonEl) {
  buttonEl.addEventListener('click', function () {
    alert('What kind of music do bubbles hate? POP');
  });
}

// Theme toggle: persists choice in localStorage and applies a data-theme attribute
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle && themeToggle.setAttribute('aria-pressed', 'true');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle && themeToggle.setAttribute('aria-pressed', 'false');
    if (themeToggle) themeToggle.textContent = '🌙';
  }
}

// Initialize theme
(function () {
  try {
    const saved = localStorage.getItem('devlog-theme');
    if (saved) applyTheme(saved);
    // Respect OS preference if no saved preference
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    }
  } catch (e) {
    // ignore
  }
})();

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('devlog-theme', next); } catch (e) {}
  });
}

// Code copy buttons for <pre><code> blocks
function addCopyButtons() {
  document.querySelectorAll('pre').forEach((pre) => {
    // Avoid adding multiple buttons
    if (pre.querySelector('.copy-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.innerText = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.addEventListener('click', async () => {
      const code = pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        btn.innerText = 'Copied!';
        setTimeout(() => (btn.innerText = 'Copy'), 1500);
      } catch (err) {
        // Fallback: select + execCopy
        const range = document.createRange();
        range.selectNodeContents(pre);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try {
          document.execCommand('copy');
          btn.innerText = 'Copied!';
          setTimeout(() => (btn.innerText = 'Copy'), 1500);
        } catch (e) {
          btn.innerText = 'Fail';
          setTimeout(() => (btn.innerText = 'Copy'), 1500);
        }
        sel.removeAllRanges();
      }
    });
    pre.style.position = 'relative';
    pre.insertBefore(btn, pre.firstChild);
  });
}

// Run copy button init once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addCopyButtons);
} else {
  addCopyButtons();
}

// Update footer year dynamically
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
