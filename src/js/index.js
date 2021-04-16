import 'bootstrap';
// Google analytics
var analytics = true;
try {
  if (
    'localStorage' in window &&
    window['localStorage'] !== null &&
    localStorage["analytics"] == 'no'
  ) {
    analytics = false;
  }
} catch (e) {
}

if (analytics) {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-76634359-2', 'auto');
  ga('send', 'pageview');
} else {
  console.log('Google Analytics has been disabled');
}

document.addEventListener('DOMContentLoaded', function () {
  //Bootstrap navbar hide on click outside
  document.addEventListener('click', evt => {
    const isNavbarTogglerActive = evt.target && evt.target.classList.contains('navbar-toggler');
    const isMobileMenuOpen = document
      .getElementsByClassName('navbar-collapse')[0]
      .classList.contains('show');
    if (isMobileMenuOpen === true && !isNavbarTogglerActive) {
      document.querySelector('button.navbar-toggler').click();
    }
  });
  if (window.location.pathname) {
    const activeCssClass = 'header__item--active';
   
    const currentAnchor = document.querySelector(`a[href$='${path}']`);
    currentAnchor.classList.add(activeCssClass);
  }
});
