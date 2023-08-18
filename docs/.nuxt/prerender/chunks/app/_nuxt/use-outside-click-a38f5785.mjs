import { ref, computed, watchEffect } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { w, h } from './hidden-940c75ed.mjs';
import { c, o } from './env-f8cf6da3.mjs';

function u(e, t, n) {
  c.isServer || watchEffect((o2) => {
    document.addEventListener(e, t, n), o2(() => document.removeEventListener(e, t, n));
  });
}
function y(f, m, i = computed(() => true)) {
  function a(e, u2) {
    if (!i.value || e.defaultPrevented)
      return;
    let n = u2(e);
    if (n === null || !n.getRootNode().contains(n))
      return;
    let c2 = function o2(t) {
      return typeof t == "function" ? o2(t()) : Array.isArray(t) || t instanceof Set ? t : [t];
    }(f);
    for (let o$1 of c2) {
      if (o$1 === null)
        continue;
      let t = o$1 instanceof HTMLElement ? o$1 : o(o$1);
      if (t != null && t.contains(n) || e.composed && e.composedPath().includes(t))
        return;
    }
    return !w(n, h.Loose) && n.tabIndex !== -1 && e.preventDefault(), m(e, n);
  }
  let r = ref(null);
  u("mousedown", (e) => {
    var u2, n;
    i.value && (r.value = ((n = (u2 = e.composedPath) == null ? void 0 : u2.call(e)) == null ? void 0 : n[0]) || e.target);
  }, true), u("click", (e) => {
    r.value && (a(e, () => r.value), r.value = null);
  }, true), u("blur", (e) => a(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

export { y };
//# sourceMappingURL=use-outside-click-a38f5785.mjs.map
