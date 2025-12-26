// Minimal interactivity: form handling and sample menu download
const MENU_SECTION_PATH = 'menu-section.html';

async function loadMenuSection() {
  const container = document.getElementById('menu-section');
  if (!container) return;
  try {
    const response = await fetch(MENU_SECTION_PATH);
    if (!response.ok) throw new Error('Failed to load menu');
    container.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
    container.innerHTML = '<p class="muted">Menu content is temporarily unavailable.</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  loadMenuSection();
});
