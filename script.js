// Theme toggle + persist
const btn = document.getElementById('themeToggle');
const body = document.body;
const current = localStorage.getItem('theme');

if(current === 'dark') {
  body.classList.remove('light');
  body.classList.add('dark');
  document.documentElement.classList.add('dark');
  btn.textContent = '☀️';
} else {
  body.classList.remove('dark');
  body.classList.add('light');
  document.documentElement.classList.remove('dark');
  btn.textContent = '🌙';
}

btn.addEventListener('click', () => {
  if(body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme','dark');
    btn.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme','light');
    btn.textContent = '🌙';
  }
});
