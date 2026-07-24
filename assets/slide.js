/* =========================================================================
   slide.js — 每个 slides/*.html 页面都引入的小助手
   作用：当页面被嵌在 index.html 的 iframe 里时，把键盘 / 滑动 / 滚轮
   操作转发给外层的播放器，这样在子页面上按方向键、划屏也能翻页。
   当页面被单独打开（直接双击 slides/xx.html）时，它什么也不做，页面照样能看。
   —— 这个文件不含任何“页面清单”，所以增删页面都不用动它。
   ========================================================================= */
(function () {
  // 是否嵌在别的页面里（即 index.html 的 iframe 中）
  var embedded = window.parent && window.parent !== window;
  if (!embedded) return; // 单独打开时，无需转发

  // 向外层「报到」：证明这一页真的加载成功了。
  // 外层据此判断某页是否缺失（缺失就不会收到报到）。
  try { window.parent.postMessage({ __slideLoaded: true }, '*'); } catch (e) {}

  function tell(dir) {
    // dir: 'next' | 'prev'
    try { window.parent.postMessage({ __slideNav: dir }, '*'); } catch (e) {}
  }

  // 键盘：方向键 / 空格 / PageUp/Down
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { tell('next'); e.preventDefault(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { tell('prev'); e.preventDefault(); }
    else if (e.key === 'Home') { try { window.parent.postMessage({ __slideNav: 'first' }, '*'); } catch (x) {} }
    else if (e.key === 'End') { try { window.parent.postMessage({ __slideNav: 'last' }, '*'); } catch (x) {} }
  });

  // 触摸滑动
  var tsX = 0, tsY = 0;
  document.addEventListener('touchstart', function (e) {
    tsX = e.changedTouches[0].clientX; tsY = e.changedTouches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tsX;
    var dy = e.changedTouches[0].clientY - tsY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { tell(dx < 0 ? 'next' : 'prev'); }
  }, { passive: true });

  // 鼠标滚轮（防抖交给外层）
  window.addEventListener('wheel', function (e) {
    if (Math.abs(e.deltaY) < 30 && Math.abs(e.deltaX) < 30) return;
    tell((e.deltaY > 0 || e.deltaX > 0) ? 'next' : 'prev');
  }, { passive: true });
})();
