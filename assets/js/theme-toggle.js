(function () {
  var storageKey = 'theme-preference';
  var root = document.documentElement;
  var toggleSelector = '[data-theme-toggle]';
  var labelSelector = '[data-theme-label]';

  function getStoredTheme() {
    try {
      var value = localStorage.getItem(storageKey);
      if (value === 'light' || value === 'dark') {
        return value;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  function getPreferredTheme() {
    var stored = getStoredTheme();
    if (stored) {
      return stored;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function updateToggles(theme) {
    var toggles = document.querySelectorAll(toggleSelector);
    for (var i = 0; i < toggles.length; i++) {
      var toggle = toggles[i];
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      var label = toggle.querySelector(labelSelector);
      if (label) {
        label.textContent = theme === 'dark' ? 'Dark' : 'Light';
      }
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    updateToggles(theme);
  }

  function setTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // Ignore storage failures.
    }
    applyTheme(theme);
  }

  function toggleTheme() {
    var current = root.getAttribute('data-theme') || getPreferredTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  function init() {
    applyTheme(getPreferredTheme());
    var toggles = document.querySelectorAll(toggleSelector);
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', function (event) {
        event.preventDefault();
        toggleTheme();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  if (window.matchMedia) {
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () {
      if (getStoredTheme()) {
        return;
      }
      applyTheme(getPreferredTheme());
    };
    if (media.addEventListener) {
      media.addEventListener('change', onChange);
    } else if (media.addListener) {
      media.addListener(onChange);
    }
  }
})();
