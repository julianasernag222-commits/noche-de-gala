const params = new URLSearchParams(window.location.search);
const rawName = (params.get('nombre') || 'Invitado especial').trim();
const safeName = rawName.replace(/\s+/g, ' ').slice(0, 48);

document.getElementById('guestName').textContent = safeName || 'Invitado especial';

const cover = document.getElementById('cover');
const invite = document.getElementById('invite');
const openButton = document.getElementById('openInvite');
const backButton = document.getElementById('backButton');

openButton.addEventListener('click', () => {
  if (openButton.classList.contains('opening')) return;
  openButton.classList.add('opening');
  window.setTimeout(() => {
    cover.classList.add('leaving');
    window.setTimeout(() => {
      cover.hidden = true;
      invite.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 480);
  }, 420);
});

backButton.addEventListener('click', () => {
  invite.hidden = true;
  cover.hidden = false;
  cover.classList.remove('leaving');
  openButton.classList.remove('opening');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
