(function () {
  /* Hero play / pause toggle */
  var play = document.getElementById('heroPlay');
  var pause = document.getElementById('heroPause');
  function setState(isPlaying) {
    play.classList.toggle('is-active', isPlaying);
    pause.classList.toggle('is-active', !isPlaying);
  }
  if (play && pause) {
    play.addEventListener('click', function () { setState(true); });
    pause.addEventListener('click', function () { setState(false); });
  }

  /* Bestsellers slider */
  var track = document.getElementById('products');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  if (!track) return;

  var index = 0;
  function perView() {
    return window.innerWidth <= 900 ? 2 : 4;
  }
  function update() {
    var items = track.children.length;
    var max = Math.max(0, items - perView());
    index = Math.min(Math.max(index, 0), max);
    track.style.transform = 'translateX(' + (-index * (100 / perView())) + '%)';
    prev.disabled = index === 0;
    next.disabled = index === max;
  }
  prev.addEventListener('click', function () { index--; update(); });
  next.addEventListener('click', function () { index++; update(); });
  window.addEventListener('resize', update);
  update();
})();
