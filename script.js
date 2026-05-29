document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-navigation');

  if (!toggle || !nav) {
    return;
  }

  const dropdownParents = Array.from(nav.querySelectorAll('.has-dropdown'));

  const closeDropdowns = () => {
    dropdownParents.forEach((parent) => {
      parent.classList.remove('open');
      const trigger = parent.querySelector('.nav-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
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
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', closeDropdowns);

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const menuOpen = document.body.classList.contains('nav-open');
    const anyDropdownOpen = dropdownParents.some((p) => p.classList.contains('open'));
    if (menuOpen) {
      closeMenu();
      toggle.focus();
    } else if (anyDropdownOpen) {
      const openParent = dropdownParents.find((p) => p.classList.contains('open'));
      closeDropdowns();
      const trigger = openParent && openParent.querySelector('.nav-trigger');
      if (trigger) trigger.focus();
    }
  });

  const includeTargets = document.querySelectorAll('[data-include]');
  includeTargets.forEach((target) => {
    const src = target.getAttribute('data-include');
    if (!src) {
      return;
    }

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${src}`);
        }

        return response.text();
      })
      .then((html) => {
        target.innerHTML = html;
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
