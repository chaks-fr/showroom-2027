(() => {
  'use strict';
  const translations = window.CHAKS_TRANSLATIONS;
  const supported = ['fr', 'de', 'it', 'en'];
  const isSupported = code => supported.includes(code);
  const languageLinks = Array.from(document.querySelectorAll('[data-language]'));

  function languageFromBrowser() {
    const preferences = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || 'fr'];
    for (const preference of preferences) {
      const code = String(preference).toLowerCase().split(/[-_]/)[0];
      if (isSupported(code)) return code;
    }
    return 'fr';
  }

  function applyLanguage(language) {
    const code = isSupported(language) ? language : 'fr';
    const text = translations[code];
    document.documentElement.lang = code;
    document.title = text.title;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(text, key)) element.textContent = text[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(text, key)) element.setAttribute('aria-label', text[key]);
    });
    document.querySelectorAll('[data-network]').forEach(element => {
      element.setAttribute('aria-label', text.socialLink.replace('{network}', element.dataset.network));
    });
    const poster = document.querySelector('#invitation-poster');
    const imagePath = `assets/invitation-${code}.jpg`;
    if (poster.getAttribute('src') !== imagePath) poster.setAttribute('src', imagePath);
    poster.setAttribute('alt', text.posterAlt);
    document.querySelector('meta[name="description"]').setAttribute('content', text.description);
    document.querySelector('meta[property="og:title"]').setAttribute('content', text.title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', text.description);

    const currentURL = new URL(window.location.href);
    currentURL.searchParams.set('lang', code);
    try { window.history.replaceState(null, '', currentURL.toString()); } catch (_) { /* Local file preview */ }
    languageLinks.forEach(link => {
      const targetCode = link.dataset.language;
      const targetURL = new URL(currentURL.toString());
      targetURL.searchParams.set('lang', targetCode);
      link.setAttribute('href', targetURL.toString());
      if (targetCode === code) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  languageLinks.forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      applyLanguage(link.dataset.language);
    });
  });
  const requested = (new URL(window.location.href).searchParams.get('lang') || '').toLowerCase();
  applyLanguage(isSupported(requested) ? requested : languageFromBrowser());
  window.addEventListener('popstate', () => {
    const requested = (new URL(window.location.href).searchParams.get('lang') || '').toLowerCase();
    applyLanguage(isSupported(requested) ? requested : languageFromBrowser());
  });
})();
