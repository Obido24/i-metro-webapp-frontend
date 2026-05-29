(() => {
  const navItems = [
    ['Home', '/'],
    ['Services', '/services'],
    ['How It Works', '/how-it-works'],
    ['Download', '/download'],
    ['Support', '/support'],
    ['About', '/about'],
  ];

  const style = document.createElement('style');
  style.textContent = `
    body {
      position: relative;
      overflow-x: hidden;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -2;
      opacity: 0.35;
      background-image:
        linear-gradient(120deg, rgba(0, 54, 26, 0.03) 0%, rgba(0, 54, 26, 0) 42%),
        linear-gradient(90deg, rgba(254, 183, 29, 0.08) 0 2px, transparent 2px 140px),
        linear-gradient(rgba(26, 77, 46, 0.05) 0 2px, transparent 2px 140px);
      background-size: 100% 100%, 140px 140px, 140px 140px;
      animation: site-grid-drift 22s linear infinite;
    }
    body::after {
      content: "";
      position: fixed;
      inset: -20% 0 auto;
      height: 320px;
      pointer-events: none;
      z-index: -1;
      opacity: 0.45;
      background:
        radial-gradient(circle at 15% 35%, rgba(157, 211, 170, 0.24), transparent 38%),
        radial-gradient(circle at 85% 10%, rgba(254, 183, 29, 0.18), transparent 30%);
      filter: blur(18px);
      animation: site-glow-sway 16s ease-in-out infinite alternate;
    }
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
    .i-metro-scroll-line {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      transform-origin: left center;
      transform: scaleX(0);
      z-index: 80;
      pointer-events: none;
      background: linear-gradient(90deg, #feb71d 0%, #1a4d2e 45%, #00361a 100%);
      box-shadow: 0 0 18px rgba(254, 183, 29, 0.35);
    }
    [data-motion-reveal] {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition:
        opacity 720ms cubic-bezier(0.2, 0.8, 0.2, 1),
        transform 720ms cubic-bezier(0.2, 0.8, 0.2, 1);
      transition-delay: var(--motion-delay, 0ms);
      will-change: opacity, transform;
    }
    [data-motion-reveal].is-visible {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    [data-motion-float] {
      animation: site-float 9s ease-in-out infinite;
      will-change: transform;
    }
    [data-motion-card] {
      transition:
        transform 220ms ease,
        box-shadow 220ms ease,
        border-color 220ms ease;
    }
    [data-motion-card]:hover {
      transform: translate3d(0, -6px, 0);
      box-shadow: 0 18px 36px -18px rgba(26, 77, 46, 0.28);
      border-color: rgba(26, 77, 46, 0.18);
    }
    @media (max-width: 767px) {
      .px-margin-desktop {
        padding-left: 1.25rem !important;
        padding-right: 1.25rem !important;
      }
      .py-unit-xxl {
        padding-top: 4.5rem !important;
        padding-bottom: 4.5rem !important;
      }
      .text-display-lg {
        font-size: clamp(2.35rem, 11vw, 3.8rem) !important;
        line-height: 1.02 !important;
      }
      .text-headline-lg {
        font-size: clamp(1.85rem, 8.5vw, 2.6rem) !important;
        line-height: 1.08 !important;
      }
      .text-title-large {
        font-size: 1.5rem !important;
        line-height: 1.2 !important;
      }
      .text-body-lg {
        font-size: 1rem !important;
        line-height: 1.65 !important;
      }
      .max-w-container-max {
        width: 100%;
      }
      .gap-unit-xl,
      .gap-unit-xxl,
      .gap-gutter {
        gap: 1.25rem !important;
      }
      .rounded-\[40px\] {
        border-radius: 1.75rem !important;
      }
      .i-metro-scroll-line {
        height: 2px;
      }
      header .max-w-container-max,
      footer .max-w-\[1280px\],
      footer .max-w-container-max {
        width: 100%;
      }
      main.pt-32 {
        padding-top: 6.75rem !important;
      }
      [class~="h-[614px]"] {
        min-height: 28rem !important;
        height: auto !important;
        padding-top: 6rem !important;
        padding-bottom: 6rem !important;
      }
      [class~="text-[48px]"] {
        font-size: clamp(2.35rem, 10vw, 3.5rem) !important;
        line-height: 1.08 !important;
      }
      [class~="max-w-[540px]"],
      [class~="max-w-[320px]"],
      [class~="max-w-[340px]"] {
        max-width: 100% !important;
      }
      [class~="w-[99.8%]"],
      [class~="w-[98%]"],
      [class~="w-[95%]"] {
        width: 100% !important;
      }
      main br {
        display: none;
      }
      .step-card {
        min-height: auto !important;
      }
    }
    @keyframes site-grid-drift {
      0% {
        background-position: 0 0, 0 0, 0 0;
      }
      100% {
        background-position: 0 0, 140px 0, 0 140px;
      }
    }
    @keyframes site-glow-sway {
      0% {
        transform: translate3d(-2%, 0, 0);
      }
      100% {
        transform: translate3d(2%, 16px, 0);
      }
    }
    @keyframes site-float {
      0%, 100% {
        transform: translate3d(0, 0, 0);
      }
      50% {
        transform: translate3d(0, -10px, 0);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      body::before,
      body::after,
      [data-motion-float] {
        animation: none !important;
      }
      [data-motion-reveal] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  const scrollLine = document.createElement('div');
  scrollLine.className = 'i-metro-scroll-line';
  document.body.appendChild(scrollLine);

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const updateScrollLine = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    scrollLine.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
  };
  updateScrollLine();
  window.addEventListener('scroll', updateScrollLine, { passive: true });

  const revealTargets = [
    ...document.querySelectorAll('main section > div'),
    ...document.querySelectorAll('main .shadow-level-1, main .shadow-level-2, main .shadow-soft, main .shadow-lift'),
    ...document.querySelectorAll('main article'),
  ].filter((node, index, list) => node instanceof HTMLElement && list.indexOf(node) === index);

  revealTargets.forEach((node, index) => {
    node.setAttribute('data-motion-reveal', '');
    node.style.setProperty('--motion-delay', `${Math.min(index * 35, 220)}ms`);
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealTargets.forEach((node) => revealObserver.observe(node));

  document.querySelectorAll('main img[data-alt]').forEach((node) => {
    node.setAttribute('data-motion-float', '');
  });

  document.querySelectorAll('main .shadow-level-1, main .shadow-soft, main .shadow-lift').forEach((node) => {
    node.setAttribute('data-motion-card', '');
  });

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
