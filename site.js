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
    .device-mockup {
      position: relative;
      width: 100%;
      border-radius: 2.4rem;
      background:
        linear-gradient(180deg, #1e2328 0%, #0d1116 100%);
      box-shadow:
        0 30px 60px -30px rgba(5, 16, 10, 0.5),
        0 10px 20px rgba(255, 255, 255, 0.08) inset;
      padding: 0.72rem;
    }
    .device-mockup::before {
      content: "";
      position: absolute;
      top: 0.75rem;
      left: 50%;
      transform: translateX(-50%);
      width: 34%;
      height: 1.55rem;
      border-radius: 9999px;
      background: rgba(7, 10, 13, 0.95);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08) inset;
      z-index: 3;
    }
    .device-mockup::after {
      content: "";
      position: absolute;
      top: 1.18rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0.42rem;
      height: 0.42rem;
      border-radius: 9999px;
      background: rgba(58, 73, 90, 0.95);
      z-index: 4;
    }
    .device-mockup-screen {
      position: relative;
      overflow: hidden;
      border-radius: 1.9rem;
      background: #ffffff;
      aspect-ratio: 9 / 19.5;
      box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.45),
        0 0 0 1px rgba(193, 201, 191, 0.3);
    }
    .device-mockup-screen img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      display: block;
    }
    .device-scene {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 30rem;
      padding: 2rem 1.5rem;
      border-radius: 2rem;
      overflow: hidden;
      isolation: isolate;
    }
    .device-scene::before {
      content: "";
      position: absolute;
      inset: 8% 10% auto;
      height: 62%;
      border-radius: 2rem;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(241, 247, 243, 0.92));
      box-shadow:
        0 30px 60px -48px rgba(0, 54, 26, 0.35),
        0 1px 0 rgba(255, 255, 255, 0.7) inset;
      z-index: -2;
    }
    .device-scene::after {
      content: "";
      position: absolute;
      inset: auto 15% 5%;
      height: 1.1rem;
      border-radius: 9999px;
      background: radial-gradient(circle, rgba(0, 0, 0, 0.18), transparent 72%);
      filter: blur(12px);
      z-index: -3;
    }
    .device-scene[data-scene="table"]::before {
      inset: 6% 5% auto;
      height: 70%;
      background:
        linear-gradient(145deg, rgba(245, 249, 246, 0.95), rgba(227, 238, 231, 0.98));
      border: 1px solid rgba(193, 201, 191, 0.45);
    }
    .device-scene[data-scene="table"] .device-mockup {
      transform: rotate(-10deg);
    }
    .device-scene[data-scene="table"] .device-scene-accent {
      position: absolute;
      border-radius: 9999px;
      background: rgba(157, 211, 170, 0.18);
      filter: blur(1px);
      z-index: -1;
    }
    .device-scene[data-scene="table"] .device-scene-accent:first-of-type {
      width: 7rem;
      height: 7rem;
      top: 1.5rem;
      right: 2rem;
    }
    .device-scene[data-scene="table"] .device-scene-accent:last-of-type {
      width: 9rem;
      height: 9rem;
      bottom: 2rem;
      left: 1rem;
      background: rgba(254, 183, 29, 0.12);
    }
    .device-scene[data-scene="held"]::before {
      inset: 12% 12% auto;
      height: 54%;
      background:
        radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.96), rgba(236, 244, 238, 0.92));
    }
    .device-scene[data-scene="held"] .device-mockup {
      transform: rotate(4deg) translateY(0.2rem);
    }
    .device-scene-hand {
      position: absolute;
      bottom: 2.25rem;
      width: 7rem;
      height: 5rem;
      border-radius: 2.5rem 2.5rem 1.8rem 1.8rem;
      background:
        linear-gradient(180deg, rgba(199, 151, 118, 0.9), rgba(158, 107, 79, 0.92));
      box-shadow:
        0 18px 24px -20px rgba(75, 39, 23, 0.5),
        0 4px 8px rgba(255, 255, 255, 0.12) inset;
      z-index: 0;
    }
    .device-scene-hand::before,
    .device-scene-hand::after {
      content: "";
      position: absolute;
      top: -0.4rem;
      width: 1.2rem;
      height: 2.8rem;
      border-radius: 9999px;
      background: inherit;
      box-shadow: inherit;
    }
    .device-scene-hand::before {
      left: 1rem;
      transform: rotate(-8deg);
    }
    .device-scene-hand::after {
      right: 1rem;
      transform: rotate(10deg);
    }
    .device-scene-hand[data-hand="left"] {
      left: calc(50% - 7.6rem);
      transform: rotate(-16deg);
    }
    .device-scene-hand[data-hand="right"] {
      right: calc(50% - 7.6rem);
      transform: rotate(16deg);
    }
    .device-scene-chip {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      min-width: 8.2rem;
      max-width: 10.5rem;
      padding: 0.8rem 1rem;
      border-radius: 1.15rem;
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(193, 201, 191, 0.42);
      box-shadow: 0 16px 30px -24px rgba(0, 54, 26, 0.35);
      z-index: 2;
    }
    .device-scene-chip strong {
      display: block;
      color: #00361a;
      font-size: 0.92rem;
      line-height: 1.1;
    }
    .device-scene-chip span:last-child {
      color: #5b645f;
      font-size: 0.78rem;
      line-height: 1.25;
    }
    .device-scene-chip .material-symbols-outlined {
      font-size: 1.15rem;
      color: #00361a;
    }
    .device-scene-chip[data-chip="top-left"] {
      top: 2.25rem;
      left: 0.4rem;
    }
    .device-scene-chip[data-chip="mid-right"] {
      top: 44%;
      right: 0;
    }
    .device-scene-chip[data-chip="bottom-left"] {
      bottom: 1.6rem;
      left: 1rem;
    }
    .device-scene-chip[data-chip="top-right"] {
      top: 2.4rem;
      right: 0.75rem;
    }
    .device-scene-chip[data-chip="bottom-right"] {
      bottom: 1.25rem;
      right: 0.65rem;
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
    [data-page-hero-title] {
      text-wrap: balance;
    }
    [data-page-hero-copy] {
      text-wrap: pretty;
    }
    @media (max-width: 767px) {
      body {
        background-size: 100% 100%, 104px 104px, 104px 104px;
      }
      .px-margin-desktop {
        padding-left: 1.25rem !important;
        padding-right: 1.25rem !important;
      }
      .py-unit-xxl {
        padding-top: 3.5rem !important;
        padding-bottom: 3.5rem !important;
      }
      .text-display-lg {
        font-size: clamp(2.2rem, 10vw, 3.3rem) !important;
        line-height: 0.98 !important;
      }
      .text-headline-lg {
        font-size: clamp(1.8rem, 8vw, 2.45rem) !important;
        line-height: 1.1 !important;
      }
      .text-title-large {
        font-size: 1.35rem !important;
        line-height: 1.2 !important;
      }
      .text-body-lg {
        font-size: 1rem !important;
        line-height: 1.7 !important;
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
      header {
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }
      header > div:first-child {
        min-height: 5rem;
        gap: 0.875rem;
        padding-top: 0.875rem !important;
        padding-bottom: 0.875rem !important;
      }
      header a[href="/"] {
        min-width: 0;
      }
      header a[href="/"] img {
        width: 2.6rem !important;
        height: 2.6rem !important;
        border-radius: 0.85rem !important;
      }
      header [data-mobile-menu-toggle] {
        width: 3rem !important;
        height: 3rem !important;
      }
      header [data-mobile-menu-toggle] .material-symbols-outlined {
        font-size: 1.4rem !important;
      }
      header a[href="/download"] {
        min-height: 3rem;
        padding: 0.875rem 1.2rem !important;
        border-radius: 9999px !important;
        font-size: 1rem !important;
        font-weight: 700 !important;
        line-height: 1.05 !important;
        white-space: nowrap;
      }
      .i-metro-mobile-menu {
        box-shadow: 0 16px 40px -28px rgba(26, 77, 46, 0.3);
      }
      .i-metro-mobile-menu .mx-auto {
        gap: 0.35rem;
        padding-top: 0.75rem;
        padding-bottom: 1rem;
      }
      .i-metro-mobile-menu a {
        border-radius: 0.9rem;
        padding: 0.9rem 0.95rem;
      }
      main.pt-32 {
        padding-top: 6.15rem !important;
      }
      main.pt-20,
      main.pt-24 {
        padding-top: 5.8rem !important;
      }
      [data-page-hero] {
        padding-top: 1.5rem !important;
        padding-bottom: 2.75rem !important;
        margin-bottom: 2.75rem !important;
      }
      [data-page-hero-eyebrow] {
        margin-bottom: 1rem !important;
        padding: 0.55rem 0.9rem !important;
        border-radius: 9999px !important;
        font-size: 0.82rem !important;
        line-height: 1 !important;
        letter-spacing: 0 !important;
      }
      [data-page-hero-title] {
        max-width: 8ch;
        margin-bottom: 1rem !important;
        font-size: clamp(2.35rem, 11vw, 3.45rem) !important;
        line-height: 0.95 !important;
        letter-spacing: -0.04em !important;
      }
      [data-page-hero-copy] {
        max-width: 30ch !important;
        font-size: 1rem !important;
        line-height: 1.72 !important;
      }
      [data-page-hero].text-center [data-page-hero-title],
      [data-page-hero].text-center [data-page-hero-copy],
      [data-page-hero] .text-center [data-page-hero-title],
      [data-page-hero] .text-center [data-page-hero-copy] {
        margin-left: auto;
        margin-right: auto;
      }
      [data-page-hero-actions] {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 0.85rem !important;
        margin-top: 1.1rem !important;
      }
      [data-page-hero-actions] > a,
      [data-page-hero-actions] > button {
        width: 100%;
        justify-content: center !important;
        border-radius: 1rem !important;
        padding: 0.95rem 1.25rem !important;
        font-size: 1rem !important;
        line-height: 1.2 !important;
      }
      [data-page-hero-actions] > a .material-symbols-outlined,
      [data-page-hero-actions] > button .material-symbols-outlined {
        font-size: 1.2rem !important;
      }
      [data-page-hero-media] {
        margin-top: 0.75rem;
      }
      [class~="h-[614px]"] {
        min-height: 24rem !important;
        height: auto !important;
        padding-top: 4rem !important;
        padding-bottom: 4rem !important;
      }
      [class~="text-[48px]"] {
        font-size: clamp(2.3rem, 10vw, 3.35rem) !important;
        line-height: 0.98 !important;
      }
      [class~="max-w-[540px]"],
      [class~="max-w-[320px]"],
      [class~="max-w-[340px]"] {
        max-width: 100% !important;
      }
      [class~="aspect-square"] {
        aspect-ratio: 0.95 / 1 !important;
      }
      .device-mockup {
        max-width: 18rem;
        padding: 0.58rem;
        border-radius: 2rem;
      }
      .device-mockup::before {
        top: 0.62rem;
        width: 38%;
        height: 1.3rem;
      }
      .device-mockup::after {
        top: 1rem;
      }
      .device-mockup-screen {
        border-radius: 1.5rem;
      }
      .device-scene {
        min-height: 25rem;
        padding: 1.35rem 0.75rem 1.6rem;
        border-radius: 1.6rem;
      }
      .device-scene::before {
        inset: 10% 4% auto;
        height: 64%;
        border-radius: 1.55rem;
      }
      .device-scene-chip {
        min-width: 7.1rem;
        max-width: 8.4rem;
        padding: 0.68rem 0.8rem;
        border-radius: 1rem;
      }
      .device-scene-chip strong {
        font-size: 0.82rem;
      }
      .device-scene-chip span:last-child {
        font-size: 0.72rem;
      }
      .device-scene-chip[data-chip="top-left"] {
        top: 1rem;
        left: -0.1rem;
      }
      .device-scene-chip[data-chip="mid-right"] {
        top: 43%;
        right: -0.15rem;
      }
      .device-scene-chip[data-chip="bottom-left"] {
        bottom: 0.9rem;
        left: 0.25rem;
      }
      .device-scene-chip[data-chip="top-right"] {
        top: 1.15rem;
        right: 0.1rem;
      }
      .device-scene-chip[data-chip="bottom-right"] {
        bottom: 0.75rem;
        right: 0.2rem;
      }
      .device-scene-hand {
        width: 5.3rem;
        height: 3.9rem;
        bottom: 1.35rem;
      }
      .device-scene-hand::before,
      .device-scene-hand::after {
        width: 0.92rem;
        height: 2.15rem;
      }
      .device-scene-hand[data-hand="left"] {
        left: calc(50% - 5.85rem);
      }
      .device-scene-hand[data-hand="right"] {
        right: calc(50% - 5.85rem);
      }
      [class~="w-[99.8%]"],
      [class~="w-[98%]"],
      [class~="w-[95%]"] {
        width: 100% !important;
      }
      [data-page-hero] br,
      h1 br,
      h2 br {
        display: none;
      }
      section .rounded-3xl,
      section .rounded-2xl,
      section .rounded-xl {
        border-radius: 1.35rem !important;
      }
      .step-card,
      .privacy-content section,
      #support-ticket-form,
      [data-support-form-card] {
        min-height: auto !important;
      }
      .privacy-content section,
      [data-support-form-card] {
        padding: 1.4rem !important;
      }
      .privacy-content .space-y-unit-xl {
        gap: 1.25rem !important;
      }
      .privacy-content p,
      .privacy-content li {
        line-height: 1.8 !important;
      }
      .privacy-content h2 {
        margin-bottom: 1rem !important;
      }
      .privacy-content .flex.gap-4 {
        gap: 0.85rem !important;
      }
      [data-support-form-card] {
        box-shadow: 0 20px 42px -30px rgba(26, 77, 46, 0.28) !important;
      }
      #support-ticket-form {
        gap: 1.1rem !important;
      }
      #support-ticket-form label {
        font-size: 0.95rem !important;
      }
      #support-ticket-form input:not([type="checkbox"]),
      #support-ticket-form select,
      #support-ticket-form textarea {
        min-height: 3.5rem;
        padding: 0.95rem 1rem !important;
        border-radius: 1rem !important;
        font-size: 1rem !important;
      }
      #support-ticket-form textarea {
        min-height: 9rem;
      }
      #support-ticket-form button[type="submit"] {
        min-height: 3.75rem;
        border-radius: 1rem !important;
        font-size: 1.1rem !important;
      }
      #support-search-input {
        min-height: 3.9rem;
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
        font-size: 1rem !important;
      }
      #support-search-results {
        border-radius: 1.2rem !important;
      }
      .step-card {
        padding: 1.4rem !important;
      }
      .step-card .step-number {
        margin-bottom: 1rem !important;
      }
      footer {
        padding-top: 3.25rem !important;
        padding-bottom: 2.75rem !important;
      }
      footer .gap-10 {
        gap: 1.85rem !important;
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

  const firstSection = document.querySelector('main section');
  if (firstSection instanceof HTMLElement) {
    firstSection.setAttribute('data-page-hero', '');

    const heroEyebrow = firstSection.querySelector('span[class*="rounded-full"], span[class*="bg-primary-fixed"], span[class*="bg-white/10"]');
    if (heroEyebrow instanceof HTMLElement) {
      heroEyebrow.setAttribute('data-page-hero-eyebrow', '');
    }

    const heroTitle = firstSection.querySelector('h1');
    if (heroTitle instanceof HTMLElement) {
      heroTitle.setAttribute('data-page-hero-title', '');
    }

    const heroCopy = firstSection.querySelector('p');
    if (heroCopy instanceof HTMLElement) {
      heroCopy.setAttribute('data-page-hero-copy', '');
    }

    const heroMedia = firstSection.querySelector('img')?.closest('div');
    if (heroMedia instanceof HTMLElement) {
      heroMedia.setAttribute('data-page-hero-media', '');
    }

    const heroActions = Array.from(firstSection.querySelectorAll('a[href], button'))
      .map((node) => node.parentElement)
      .find((node) => node instanceof HTMLElement && node.querySelectorAll('a[href], button').length >= 1);

    if (heroActions instanceof HTMLElement) {
      heroActions.setAttribute('data-page-hero-actions', '');
    }
  }

  const supportForm = document.getElementById('support-ticket-form');
  const supportFormCard = supportForm?.closest('div');
  if (supportFormCard instanceof HTMLElement) {
    supportFormCard.setAttribute('data-support-form-card', '');
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
