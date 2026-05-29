(() => {
  const navItems = [
    ['Home', './index.html'],
    ['Services', './services.html'],
    ['How It Works', './how-it-works.html'],
    ['Download', './download.html'],
    ['Support', './support.html'],
    ['About', './about.html'],
  ];

  const style = document.createElement('style');
  style.textContent = `
    .accent-gradient {
      background: linear-gradient(135deg, #00361a 0%, #1a4d2e 100%);
    }
    .accent-gradient:hover {
      background: linear-gradient(135deg, #1a4d2e 0%, #00361a 100%);
    }
    .shadow-level-1 {
      box-shadow: 0 4px 20px -2px rgba(26, 77, 46, 0.08);
      border: 1px solid #e9ecef;
    }
    .i-metro-mobile-menu {
      max-height: 0;
      overflow: hidden;
      transition: max-height 220ms ease, border-color 220ms ease;
    }
    .i-metro-mobile-menu[data-open="true"] {
      max-height: 360px;
      border-color: rgba(193, 201, 191, 0.45);
    }
  `;
  document.head.appendChild(style);

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const header = document.querySelector('header');
  const headerInner = header?.querySelector('div');
  const nav = header?.querySelector('nav');
  const actionGroup = headerInner?.lastElementChild;

  if (!header || !headerInner || !nav || !actionGroup || header.querySelector('[data-mobile-menu-toggle]')) {
    return;
  }

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('data-mobile-menu-toggle', '');
  toggle.className = 'md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/40 bg-white text-primary shadow-sm transition-colors hover:bg-surface-container';
  toggle.innerHTML = '<span class="material-symbols-outlined text-[22px]">menu</span>';
  actionGroup.prepend(toggle);

  const menu = document.createElement('div');
  menu.className = 'i-metro-mobile-menu md:hidden border-t border-transparent bg-surface px-5';
  menu.setAttribute('data-open', 'false');
  menu.innerHTML = `
    <div class="mx-auto flex max-w-[1280px] flex-col gap-1 py-3">
      ${navItems.map(([label, href]) => `<a class="rounded-lg px-3 py-3 text-sm font-bold text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary" href="${href}">${label}</a>`).join('')}
    </div>
  `;
  header.appendChild(menu);

  toggle.addEventListener('click', () => {
    const isOpen = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.innerHTML = `<span class="material-symbols-outlined text-[22px]">${isOpen ? 'menu' : 'close'}</span>`;
  });
})();
