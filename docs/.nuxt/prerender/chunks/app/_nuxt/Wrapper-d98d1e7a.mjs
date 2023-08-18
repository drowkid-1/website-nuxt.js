import _sfc_main$1 from './Item-e6cc376d.mjs';
import { defineComponent, ref, computed, provide, watchEffect, onMounted, onUnmounted, h as h$1, Fragment, shallowRef, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, renderList, Transition, useSSRContext, inject } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { o, u, H, t, N, c as c$1 } from './env-f8cf6da3.mjs';
import { m, E as E$1, w as w$1, h, b, f, a, P, N as N$1, o as o$1, T } from './hidden-940c75ed.mjs';
import { c, l, p } from './open-closed-4c4062c8.mjs';
import { y } from './use-outside-click-a38f5785.mjs';
import __nuxt_component_1 from './Icon-f76e60ed.mjs';
import { g as useRoute, f as useRouter } from '../server.mjs';
import { a as parseMenuRoute, p as parseMenuTitle } from './navbar-325d58c0.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import './nuxt-link-7a607302.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
import './index-618e2ce1.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/ofetch@1.1.1/node_modules/ofetch/dist/node.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue-router@4.2.4_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@unhead+ssr@1.1.30/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unhead@1.1.30/node_modules/unhead/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@unhead+shared@1.1.30/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/ohash@1.1.2/node_modules/ohash/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/node-fetch-native@1.2.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unenv@1.5.1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unstorage@1.8.0/node_modules/unstorage/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unstorage@1.8.0/node_modules/unstorage/drivers/fs.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/radix3@1.0.1/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/mdast-util-to-string@3.2.0/node_modules/mdast-util-to-string/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/preprocess.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/postprocess.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/micromark-util-chunked@1.0.0/node_modules/micromark-util-chunked/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/remark-emoji@3.1.1/node_modules/remark-emoji/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/rehype-slug@5.1.0/node_modules/rehype-slug/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/rehype-external-links@2.1.0/node_modules/rehype-external-links/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/remark-mdc@1.1.3/node_modules/remark-mdc/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/remark-parse@10.0.2/node_modules/remark-parse/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/mdast-util-to-hast@12.3.0/node_modules/mdast-util-to-hast/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unist-builder@3.0.1/node_modules/unist-builder/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unist-util-position@4.0.4/node_modules/unist-util-position/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unist-util-visit@4.1.2/node_modules/unist-util-visit/index.js';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/shiki-es@0.2.0/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unenv@1.5.1/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.3.4/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.3.4/node_modules/@iconify/vue/dist/iconify.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

function E(n2, e, o2, r) {
  c$1.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : window, n2.addEventListener(e, o2, r), t2(() => n2.removeEventListener(e, o2, r));
  });
}
function w(e, n2, t2) {
  c$1.isServer || watchEffect((o2) => {
    window.addEventListener(e, n2, t2), o2(() => window.removeEventListener(e, n2, t2));
  });
}
var d = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d || {});
function n() {
  let o2 = ref(0);
  return w("keydown", (e) => {
    e.key === "Tab" && (o2.value = e.shiftKey ? 1 : 0);
  }), o2;
}
var ce = ((p2) => (p2[p2.Open = 0] = "Open", p2[p2.Closed = 1] = "Closed", p2))(ce || {});
let te = Symbol("PopoverContext");
function W(c2) {
  let m2 = inject(te, null);
  if (m2 === null) {
    let p2 = new Error(`<${c2} /> is missing a parent <${Pe.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p2, W), p2;
  }
  return m2;
}
let oe = Symbol("PopoverGroupContext");
function ne() {
  return inject(oe, null);
}
let le = Symbol("PopoverPanelContext");
function de() {
  return inject(le, null);
}
let Pe = defineComponent({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(c2, { slots: m$1, attrs: p2, expose: y$1 }) {
  var n2;
  let o$12 = ref(null);
  y$1({ el: o$12, $el: o$12 });
  let e = ref(1), f2 = ref(null), d2 = ref(null), I = ref(null), s = ref(null), b2 = computed(() => m(o$12)), P2 = computed(() => {
    var h2, D;
    if (!o(f2) || !o(s))
      return false;
    for (let w2 of document.querySelectorAll("body > *"))
      if (Number(w2 == null ? void 0 : w2.contains(o(f2))) ^ Number(w2 == null ? void 0 : w2.contains(o(s))))
        return true;
    let t2 = E$1(), r = t2.indexOf(o(f2)), u2 = (r + t2.length - 1) % t2.length, v = (r + 1) % t2.length, S = t2[u2], $ = t2[v];
    return !((h2 = o(s)) != null && h2.contains(S)) && !((D = o(s)) != null && D.contains($));
  }), a2 = { popoverState: e, buttonId: ref(null), panelId: ref(null), panel: s, button: f2, isPortalled: P2, beforePanelSentinel: d2, afterPanelSentinel: I, togglePopover() {
    e.value = u(e.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e.value !== 1 && (e.value = 1);
  }, close(t2) {
    a2.closePopover();
    let r = (() => t2 ? t2 instanceof HTMLElement ? t2 : t2.value instanceof HTMLElement ? o(t2) : o(a2.button) : o(a2.button))();
    r == null || r.focus();
  } };
  provide(te, a2), c(computed(() => u(e.value, { [0]: l.Open, [1]: l.Closed })));
  let F = { buttonId: a2.buttonId, panelId: a2.panelId, close() {
    a2.closePopover();
  } }, g = ne(), E$2 = g == null ? void 0 : g.registerPopover;
  function i() {
    var t2, r, u2, v;
    return (v = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? v : ((t2 = b2.value) == null ? void 0 : t2.activeElement) && (((r = o(f2)) == null ? void 0 : r.contains(b2.value.activeElement)) || ((u2 = o(s)) == null ? void 0 : u2.contains(b2.value.activeElement)));
  }
  return watchEffect(() => E$2 == null ? void 0 : E$2(F)), E((n2 = b2.value) == null ? void 0 : n2.defaultView, "focus", (t2) => {
    var r, u2;
    e.value === 0 && (i() || f2 && s && t2.target !== window && ((r = o(a2.beforePanelSentinel)) != null && r.contains(t2.target) || (u2 = o(a2.afterPanelSentinel)) != null && u2.contains(t2.target) || a2.closePopover()));
  }, true), y([f2, s], (t2, r) => {
    var u2;
    a2.closePopover(), w$1(r, h.Loose) || (t2.preventDefault(), (u2 = o(f2)) == null || u2.focus());
  }, computed(() => e.value === 0)), () => {
    let t2 = { open: e.value === 0, close: a2.close };
    return H({ theirProps: c2, ourProps: { ref: o$12 }, slot: t2, slots: m$1, attrs: p2, name: "Popover" });
  };
} }), Be = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t()}` } }, inheritAttrs: false, setup(c2, { attrs: m$1, slots: p2, expose: y2 }) {
  let o$2 = W("PopoverButton"), e = computed(() => m(o$2.button));
  y2({ el: o$2.button, $el: o$2.button }), onMounted(() => {
    o$2.buttonId.value = c2.id;
  }), onUnmounted(() => {
    o$2.buttonId.value = null;
  });
  let f$1 = ne(), d$1 = f$1 == null ? void 0 : f$1.closeOthers, I = de(), s = computed(() => I === null ? false : I.value === o$2.panelId.value), b$1 = ref(null), P$1 = `headlessui-focus-sentinel-${t()}`;
  s.value || watchEffect(() => {
    o$2.button.value = b$1.value;
  });
  let a$1 = b(computed(() => ({ as: c2.as, type: m$1.type })), b$1);
  function F(n2) {
    var t2, r, u2, v, S;
    if (s.value) {
      if (o$2.popoverState.value === 1)
        return;
      switch (n2.key) {
        case o$1.Space:
        case o$1.Enter:
          n2.preventDefault(), (r = (t2 = n2.target).click) == null || r.call(t2), o$2.closePopover(), (u2 = o(o$2.button)) == null || u2.focus();
          break;
      }
    } else
      switch (n2.key) {
        case o$1.Space:
        case o$1.Enter:
          n2.preventDefault(), n2.stopPropagation(), o$2.popoverState.value === 1 && (d$1 == null || d$1(o$2.buttonId.value)), o$2.togglePopover();
          break;
        case o$1.Escape:
          if (o$2.popoverState.value !== 0)
            return d$1 == null ? void 0 : d$1(o$2.buttonId.value);
          if (!o(o$2.button) || (v = e.value) != null && v.activeElement && !((S = o(o$2.button)) != null && S.contains(e.value.activeElement)))
            return;
          n2.preventDefault(), n2.stopPropagation(), o$2.closePopover();
          break;
      }
  }
  function g(n2) {
    s.value || n2.key === o$1.Space && n2.preventDefault();
  }
  function E2(n2) {
    var t2, r;
    c2.disabled || (s.value ? (o$2.closePopover(), (t2 = o(o$2.button)) == null || t2.focus()) : (n2.preventDefault(), n2.stopPropagation(), o$2.popoverState.value === 1 && (d$1 == null || d$1(o$2.buttonId.value)), o$2.togglePopover(), (r = o(o$2.button)) == null || r.focus()));
  }
  function i(n2) {
    n2.preventDefault(), n2.stopPropagation();
  }
  return () => {
    let n$1 = o$2.popoverState.value === 0, t2 = { open: n$1 }, { id: r, ...u$1 } = c2, v = s.value ? { ref: b$1, type: a$1.value, onKeydown: F, onClick: E2 } : { ref: b$1, id: r, type: a$1.value, "aria-expanded": c2.disabled ? void 0 : o$2.popoverState.value === 0, "aria-controls": o(o$2.panel) ? o$2.panelId.value : void 0, disabled: c2.disabled ? true : void 0, onKeydown: F, onKeyup: g, onClick: E2, onMousedown: i }, S = n();
    function $() {
      let h2 = o(o$2.panel);
      if (!h2)
        return;
      function D() {
        u(S.value, { [d.Forwards]: () => P(h2, N$1.First), [d.Backwards]: () => P(h2, N$1.Last) }) === T.Error && P(E$1().filter((re) => re.dataset.headlessuiFocusGuard !== "true"), u(S.value, { [d.Forwards]: N$1.Next, [d.Backwards]: N$1.Previous }), { relativeTo: o(o$2.button) });
      }
      D();
    }
    return h$1(Fragment, [H({ ourProps: v, theirProps: { ...m$1, ...u$1 }, slot: t2, attrs: m$1, slots: p2, name: "PopoverButton" }), n$1 && !s.value && o$2.isPortalled.value && h$1(f, { id: P$1, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: $ })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(c2, { attrs: m2, slots: p$1 }) {
  let y2 = W("PopoverOverlay"), o2 = `headlessui-popover-overlay-${t()}`, e = p(), f2 = computed(() => e !== null ? (e.value & l.Open) === l.Open : y2.popoverState.value === 0);
  function d2() {
    y2.closePopover();
  }
  return () => {
    let I = { open: y2.popoverState.value === 0 };
    return H({ ourProps: { id: o2, "aria-hidden": true, onClick: d2 }, theirProps: c2, slot: I, attrs: m2, slots: p$1, features: N.RenderStrategy | N.Static, visible: f2.value, name: "PopoverOverlay" });
  };
} });
let He = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t()}` } }, inheritAttrs: false, setup(c2, { attrs: m$1, slots: p$1, expose: y2 }) {
  let { focus: o$2 } = c2, e = W("PopoverPanel"), f$1 = computed(() => m(e.panel)), d$1 = `headlessui-focus-sentinel-before-${t()}`, I = `headlessui-focus-sentinel-after-${t()}`;
  y2({ el: e.panel, $el: e.panel }), onMounted(() => {
    e.panelId.value = c2.id;
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), provide(le, e.panelId), watchEffect(() => {
    var n2, t2;
    if (!o$2 || e.popoverState.value !== 0 || !e.panel)
      return;
    let i = (n2 = f$1.value) == null ? void 0 : n2.activeElement;
    (t2 = o(e.panel)) != null && t2.contains(i) || P(o(e.panel), N$1.First);
  });
  let s = p(), b2 = computed(() => s !== null ? (s.value & l.Open) === l.Open : e.popoverState.value === 0);
  function P$1(i) {
    var n2, t2;
    switch (i.key) {
      case o$1.Escape:
        if (e.popoverState.value !== 0 || !o(e.panel) || f$1.value && !((n2 = o(e.panel)) != null && n2.contains(f$1.value.activeElement)))
          return;
        i.preventDefault(), i.stopPropagation(), e.closePopover(), (t2 = o(e.button)) == null || t2.focus();
        break;
    }
  }
  function a$1(i) {
    var t2, r, u2, v, S;
    let n2 = i.relatedTarget;
    n2 && o(e.panel) && ((t2 = o(e.panel)) != null && t2.contains(n2) || (e.closePopover(), ((u2 = (r = o(e.beforePanelSentinel)) == null ? void 0 : r.contains) != null && u2.call(r, n2) || (S = (v = o(e.afterPanelSentinel)) == null ? void 0 : v.contains) != null && S.call(v, n2)) && n2.focus({ preventScroll: true })));
  }
  let F = n();
  function g() {
    let i = o(e.panel);
    if (!i)
      return;
    function n2() {
      u(F.value, { [d.Forwards]: () => {
        var r;
        P(i, N$1.First) === T.Error && ((r = o(e.afterPanelSentinel)) == null || r.focus());
      }, [d.Backwards]: () => {
        var t2;
        (t2 = o(e.button)) == null || t2.focus({ preventScroll: true });
      } });
    }
    n2();
  }
  function E2() {
    let i = o(e.panel);
    if (!i)
      return;
    function n2() {
      u(F.value, { [d.Forwards]: () => {
        let t2 = o(e.button), r = o(e.panel);
        if (!t2)
          return;
        let u2 = E$1(), v = u2.indexOf(t2), S = u2.slice(0, v + 1), h2 = [...u2.slice(v + 1), ...S];
        for (let D of h2.slice())
          if (D.dataset.headlessuiFocusGuard === "true" || r != null && r.contains(D)) {
            let w2 = h2.indexOf(D);
            w2 !== -1 && h2.splice(w2, 1);
          }
        P(h2, N$1.First, { sorted: false });
      }, [d.Backwards]: () => {
        var r;
        P(i, N$1.Previous) === T.Error && ((r = o(e.button)) == null || r.focus());
      } });
    }
    n2();
  }
  return () => {
    let i = { open: e.popoverState.value === 0, close: e.close }, { id: n2, focus: t2, ...r } = c2, u2 = { ref: e.panel, id: n2, onKeydown: P$1, onFocusout: o$2 && e.popoverState.value === 0 ? a$1 : void 0, tabIndex: -1 };
    return H({ ourProps: u2, theirProps: { ...m$1, ...r }, attrs: m$1, slot: i, slots: { ...p$1, default: (...v) => {
      var S;
      return [h$1(Fragment, [b2.value && e.isPortalled.value && h$1(f, { id: d$1, ref: e.beforePanelSentinel, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: g }), (S = p$1.default) == null ? void 0 : S.call(p$1, ...v), b2.value && e.isPortalled.value && h$1(f, { id: I, ref: e.afterPanelSentinel, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: E2 })])];
    } }, features: N.RenderStrategy | N.Static, visible: b2.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(c2, { attrs: m$1, slots: p2, expose: y2 }) {
  let o$12 = ref(null), e = shallowRef([]), f2 = computed(() => m(o$12));
  y2({ el: o$12, $el: o$12 });
  function d2(P2) {
    let a2 = e.value.indexOf(P2);
    a2 !== -1 && e.value.splice(a2, 1);
  }
  function I(P2) {
    return e.value.push(P2), () => {
      d2(P2);
    };
  }
  function s() {
    var F;
    let P2 = f2.value;
    if (!P2)
      return false;
    let a2 = P2.activeElement;
    return (F = o(o$12)) != null && F.contains(a2) ? true : e.value.some((g) => {
      var E2, i;
      return ((E2 = P2.getElementById(g.buttonId.value)) == null ? void 0 : E2.contains(a2)) || ((i = P2.getElementById(g.panelId.value)) == null ? void 0 : i.contains(a2));
    });
  }
  function b2(P2) {
    for (let a2 of e.value)
      a2.buttonId.value !== P2 && a2.close();
  }
  return provide(oe, { registerPopover: I, unregisterPopover: d2, isFocusWithinPopoverGroup: s, closeOthers: b2 }), () => H({ ourProps: { ref: o$12 }, theirProps: c2, slot: {}, attrs: m$1, slots: p2, name: "PopoverGroup" });
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Wrapper",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    useRouter();
    const isActive = computed(() => {
      var _a, _b, _c, _d;
      if (!((_a = props.menu) == null ? void 0 : _a.children))
        return false;
      const childs = ((_b = props.menu) == null ? void 0 : _b.children) || [];
      for (const child of childs) {
        const to = parseMenuRoute(child.to);
        if (typeof to === "string" && to === route.path)
          return true;
        if ((_d = route.name) == null ? void 0 : _d.toString().includes((_c = to.name) == null ? void 0 : _c.toString()))
          return true;
      }
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageNavbarMenuItem = _sfc_main$1;
      const _component_HeadlessPopover = Pe;
      const _component_HeadlessPopoverButton = Be;
      const _component_Icon = __nuxt_component_1;
      const _component_HeadlessPopoverPanel = He;
      if (__props.menu.type !== "dropdown") {
        _push(ssrRenderComponent(_component_LayoutPageNavbarMenuItem, mergeProps({ menu: __props.menu }, _attrs), null, _parent));
      } else if (__props.menu.children && __props.menu.children.length > 0) {
        _push(ssrRenderComponent(_component_HeadlessPopover, _attrs, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HeadlessPopoverButton, { class: "flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass([unref(isActive) ? "font-bold" : ""])}"${_scopeId2}>${ssrInterpolate(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(__props.menu.title))}</span>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "carbon:chevron-down",
                      class: ["ml-1", [open ? "transform rotate-180" : ""]]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", {
                        class: [unref(isActive) ? "font-bold" : ""]
                      }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(__props.menu.title)), 3),
                      createVNode(_component_Icon, {
                        name: "carbon:chevron-down",
                        class: ["ml-1", [open ? "transform rotate-180" : ""]]
                      }, null, 8, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(``);
              _push2(ssrRenderComponent(_component_HeadlessPopoverPanel, { class: "absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.menu.children, (child, j) => {
                      _push3(ssrRenderComponent(_component_LayoutPageNavbarMenuItem, {
                        menu: child,
                        "is-dropdown": ""
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.menu.children, (child, j) => {
                          return openBlock(), createBlock(_component_LayoutPageNavbarMenuItem, {
                            key: j,
                            menu: child,
                            "is-dropdown": ""
                          }, null, 8, ["menu"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_HeadlessPopoverButton, { class: "flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100" }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: [unref(isActive) ? "font-bold" : ""]
                    }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(__props.menu.title)), 3),
                    createVNode(_component_Icon, {
                      name: "carbon:chevron-down",
                      class: ["ml-1", [open ? "transform rotate-180" : ""]]
                    }, null, 8, ["class"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_HeadlessPopoverPanel, { class: "absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.menu.children, (child, j) => {
                            return openBlock(), createBlock(_component_LayoutPageNavbarMenuItem, {
                              key: j,
                              menu: child,
                              "is-dropdown": ""
                            }, null, 8, ["menu"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/NavbarMenu/Wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Wrapper-d98d1e7a.mjs.map
