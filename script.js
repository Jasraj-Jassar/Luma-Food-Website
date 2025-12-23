// Minimal interactivity: form handling and sample menu download
document.addEventListener('DOMContentLoaded',()=>{
  const yearEl=document.getElementById('year');
  if(yearEl) yearEl.textContent=new Date().getFullYear();
});
