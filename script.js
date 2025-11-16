document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-navigation');

  if (!toggle || !nav) {
    return;
  }

  const dropdownParents = Array.from(nav.querySelectorAll('.has-dropdown'));

  const closeDropdowns = () => {
    dropdownParents.forEach((parent) => parent.classList.remove('open'));
  };

  const closeMenu = () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    closeDropdowns();
  };

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open', !expanded);
    closeDropdowns();
  });

  dropdownParents.forEach((parent) => {
    const trigger = parent.querySelector('.nav-trigger');
    if (!trigger) {
      return;
    }

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = parent.classList.contains('open');
      closeDropdowns();
      parent.classList.toggle('open', !isOpen);
    });
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', closeDropdowns);
});
