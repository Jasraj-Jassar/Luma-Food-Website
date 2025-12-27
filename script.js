document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const includeEls = document.querySelectorAll('[data-include]');
  includeEls.forEach((el) => {
    const url = el.getAttribute('data-include');
    if (!url) return;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}`);
        }
        return response.text();
      })
      .then((html) => {
        el.outerHTML = html;
      })
      .catch(() => {
        el.innerHTML = '<p class="muted">Menu is temporarily unavailable. Please try again later.</p>';
      });
  });
});
