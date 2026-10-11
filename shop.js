// ===== التفاعلات فقط (كل المحتوى صار HTML عادي في index.html) =====
const $ = id => document.getElementById(id);

// Price slider text
$('priceRange').addEventListener('input', e => $('priceText').textContent = '$16 - $' + e.target.value);

// Grid / list view toggle
const grid = $('productGrid'), gBtn = $('gridBtn'), lBtn = $('listBtn');
lBtn.onclick = () => { grid.classList.add('list-view'); lBtn.classList.add('active'); gBtn.classList.remove('active'); };
gBtn.onclick = () => { if (gBtn.dataset.href) { location.href = gBtn.dataset.href; return; } grid.classList.remove('list-view'); gBtn.classList.add('active'); lBtn.classList.remove('active'); };


const cartBadge = document.querySelectorAll('.icon-badge em')[1];
grid.addEventListener('click', e => {
  if (cartBadge && e.target.classList.contains('btn-cart')) cartBadge.textContent = +cartBadge.textContent + 1;
});

// Pagination active state
document.querySelectorAll('.pg').forEach(p => p.addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.pg').forEach(x => x.classList.remove('active'));
  p.classList.add('active');
}));

// Back to top
const toTop = $('toTop');
window.addEventListener('scroll', () => toTop.classList.toggle('show', window.scrollY > 300));
toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });



