(function () {
  var toastId = 'copy-toast';
  var toastDuration = 1800;
  var toastTimer = null;

  function getToast() {
    var existing = document.getElementById(toastId);
    if (existing) {
      return existing;
    }
    var toast = document.createElement('div');
    toast.id = toastId;
    toast.className = 'copy-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
    return toast;
  }

  function showToast(message) {
    var toast = getToast();
    toast.textContent = message;
    toast.classList.add('is-visible');
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, toastDuration);
  }

  function extractEmail(href) {
    if (!href) {
      return '';
    }
    var mailto = href.replace(/^mailto:/i, '');
    return mailto.split('?')[0];
  }

  function fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    textarea.style.left = '-1000px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      return true;
    } catch (e) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function copyText(text, onDone) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { onDone(true); },
        function () { onDone(fallbackCopy(text)); }
      );
      return;
    }
    onDone(fallbackCopy(text));
  }

  function handleClick(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (typeof event.button === 'number' && event.button !== 0) {
      return;
    }
    var target = event.target;
    var link = target && target.closest ? target.closest('a[href^="mailto:"]') : null;
    if (!link) {
      return;
    }
    var email = extractEmail(link.getAttribute('href'));
    if (!email) {
      return;
    }
    event.preventDefault();
    copyText(email, function (ok) {
      if (ok) {
        showToast('Link copied');
      } else {
        showToast('Copy failed');
      }
    });
  }

  function init() {
    document.addEventListener('click', handleClick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
