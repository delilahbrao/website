// Delilah Brao — v2. Progressive enhancement only; the site works with JS off.

(function () {
  // Click-to-play YouTube: swap the thumbnail for the real iframe on demand,
  // so no YouTube JS loads until a visitor asks for a video.
  document.querySelectorAll('.video-play').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var frame = btn.closest('.video-frame');
      var id = frame.getAttribute('data-video-id');
      var title = btn.getAttribute('data-video-title') || 'YouTube video';
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      frame.innerHTML = '';
      frame.appendChild(iframe);
    });
  });

  // Fade grid cells in as they enter the viewport.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var cells = document.querySelectorAll('.track-cell, .video-cell');
    cells.forEach(function (cell) {
      cell.style.opacity = '0';
      cell.style.transform = 'translateY(14px)';
      cell.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          seen.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cells.forEach(function (cell) { seen.observe(cell); });
  }
})();
