let animation: any = null;

export function scrollToTarget(scrollEl: any, targetEl: any, time: number = 500) {
  if (typeof scrollEl === 'string') {
    scrollEl = document.getElementById(scrollEl);
  }
  if (typeof targetEl === 'string') {
    targetEl = document.getElementById(targetEl);
  }

  if (scrollEl && targetEl) {
    const targetOffsetTop = targetEl.offsetTop;
    const scrollOffsetTop = scrollEl.offsetTop;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    let targetScroll = targetOffsetTop - scrollOffsetTop;
    if (targetScroll > maxScroll) {
      targetScroll = maxScroll;
    }

    let TWEEN: any = null;
    try {
      TWEEN = require('@tweenjs/tween.js/src/Tween');
    } catch (ignore) {
    }

    if (TWEEN) {
      new TWEEN.Tween({ scroll: scrollEl.scrollTop || 0 })
        .to({ scroll: targetScroll }, time)
        .repeat(false)
        .delay(0)
        .onUpdate((params: any) => scrollEl.scrollTop = params.scroll)
        .start()
        .onComplete(() => {
          if (animation) {
            window.cancelAnimationFrame(animation);
            animation = null;
          }
        });
      startAnimation(TWEEN)(null);
    } else {
      scrollEl.scrollTop = targetScroll;
    }
  }
}

function startAnimation(TWEEN: any) {
  return function animate(time: number | null) {
    if (animation) {
      window.cancelAnimationFrame(animation);
      animation = null;
    }

    animation = window.requestAnimationFrame(animate);
    TWEEN.update(time);
  };
}
