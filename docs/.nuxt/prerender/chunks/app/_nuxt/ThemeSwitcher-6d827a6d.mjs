import { defineComponent, ref, computed, provide, onMounted, watch, h as h$1, Fragment, onUnmounted, watchEffect, nextTick, toRef, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, useSSRContext, inject, toRaw } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { u as u$1, o, K, H, T, t, N } from './env-f8cf6da3.mjs';
import { w, h, f as f$2, a as a$1, b, O, o as o$1 } from './hidden-940c75ed.mjs';
import { c, l, p } from './open-closed-4c4062c8.mjs';
import { y } from './use-outside-click-a38f5785.mjs';
import _sfc_main$1 from './index-a3956a74.mjs';
import __nuxt_component_1 from './Icon-f76e60ed.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import './nuxt-link-7a607302.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
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

function f$1(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a || {});
function x(r2, n) {
  let t2 = n.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d2 = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e2) => !n.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i) => i <= s2 ? false : !n.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i) => !n.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f$1(r2);
    }
  })();
  return d2 === -1 ? l2 : d2;
}
function e(n = {}, r2 = null, t2 = []) {
  for (let [i, o2] of Object.entries(n))
    f(t2, s(r2, i), o2);
  return t2;
}
function s(n, r2) {
  return n ? n + "[" + r2 + "]" : r2;
}
function f(n, r2, t2) {
  if (Array.isArray(t2))
    for (let [i, o2] of t2.entries())
      f(n, s(r2, i.toString()), o2);
  else
    t2 instanceof Date ? n.push([r2, t2.toISOString()]) : typeof t2 == "boolean" ? n.push([r2, t2 ? "1" : "0"]) : typeof t2 == "string" ? n.push([r2, t2]) : typeof t2 == "number" ? n.push([r2, `${t2}`]) : t2 == null ? n.push([r2, ""]) : e(t2, r2, n);
}
function d(u2, e2, r2) {
  let i = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i.value), function(t2) {
    return f2.value || (i.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n) {
    let t2 = r(n);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n) {
    e2.value = r(n);
  } };
}
function de(t2, b2) {
  return t2 === b2;
}
var fe = ((u2) => (u2[u2.Open = 0] = "Open", u2[u2.Closed = 1] = "Closed", u2))(fe || {}), pe = ((u2) => (u2[u2.Single = 0] = "Single", u2[u2.Multi = 1] = "Multi", u2))(pe || {}), ce = ((u2) => (u2[u2.Pointer = 0] = "Pointer", u2[u2.Other = 1] = "Other", u2))(ce || {});
function ve(t2) {
  requestAnimationFrame(() => requestAnimationFrame(t2));
}
let U = Symbol("ListboxContext");
function j(t2) {
  let b2 = inject(U, null);
  if (b2 === null) {
    let u2 = new Error(`<${t2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u2, j), u2;
  }
  return b2;
}
let je = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => de }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t2, { slots: b2, attrs: u2, emit: L }) {
  let e$1 = ref(1), d$1 = ref(null), m = ref(null), x$1 = ref(null), f2 = ref([]), o$12 = ref(""), i = ref(null), w$1 = ref(1);
  function R(a2 = (l2) => l2) {
    let l2 = i.value !== null ? f2.value[i.value] : null, r2 = O(a2(f2.value.slice()), (S) => o(S.dataRef.domRef)), s2 = l2 ? r2.indexOf(l2) : null;
    return s2 === -1 && (s2 = null), { options: r2, activeOptionIndex: s2 };
  }
  let h$2 = computed(() => t2.multiple ? 1 : 0), [y$1, M] = d(computed(() => t2.modelValue === void 0 ? u$1(h$2.value, { [1]: [], [0]: void 0 }) : t2.modelValue), (a2) => L("update:modelValue", a2), computed(() => t2.defaultValue)), n = { listboxState: e$1, value: y$1, mode: h$2, compare(a2, l2) {
    if (typeof t2.by == "string") {
      let r2 = t2.by;
      return (a2 == null ? void 0 : a2[r2]) === (l2 == null ? void 0 : l2[r2]);
    }
    return t2.by(a2, l2);
  }, orientation: computed(() => t2.horizontal ? "horizontal" : "vertical"), labelRef: d$1, buttonRef: m, optionsRef: x$1, disabled: computed(() => t2.disabled), options: f2, searchQuery: o$12, activeOptionIndex: i, activationTrigger: w$1, closeListbox() {
    t2.disabled || e$1.value !== 1 && (e$1.value = 1, i.value = null);
  }, openListbox() {
    t2.disabled || e$1.value !== 0 && (e$1.value = 0);
  }, goToOption(a$12, l2, r2) {
    if (t2.disabled || e$1.value === 1)
      return;
    let s2 = R(), S = x(a$12 === a.Specific ? { focus: a.Specific, id: l2 } : { focus: a$12 }, { resolveItems: () => s2.options, resolveActiveIndex: () => s2.activeOptionIndex, resolveId: (k) => k.id, resolveDisabled: (k) => k.dataRef.disabled });
    o$12.value = "", i.value = S, w$1.value = r2 != null ? r2 : 1, f2.value = s2.options;
  }, search(a2) {
    if (t2.disabled || e$1.value === 1)
      return;
    let r2 = o$12.value !== "" ? 0 : 1;
    o$12.value += a2.toLowerCase();
    let S = (i.value !== null ? f2.value.slice(i.value + r2).concat(f2.value.slice(0, i.value + r2)) : f2.value).find((V) => V.dataRef.textValue.startsWith(o$12.value) && !V.dataRef.disabled), k = S ? f2.value.indexOf(S) : -1;
    k === -1 || k === i.value || (i.value = k, w$1.value = 1);
  }, clearSearch() {
    t2.disabled || e$1.value !== 1 && o$12.value !== "" && (o$12.value = "");
  }, registerOption(a2, l2) {
    let r2 = R((s2) => [...s2, { id: a2, dataRef: l2 }]);
    f2.value = r2.options, i.value = r2.activeOptionIndex;
  }, unregisterOption(a2) {
    let l2 = R((r2) => {
      let s2 = r2.findIndex((S) => S.id === a2);
      return s2 !== -1 && r2.splice(s2, 1), r2;
    });
    f2.value = l2.options, i.value = l2.activeOptionIndex, w$1.value = 1;
  }, select(a2) {
    t2.disabled || M(u$1(h$2.value, { [0]: () => a2, [1]: () => {
      let l2 = toRaw(n.value.value).slice(), r2 = toRaw(a2), s2 = l2.findIndex((S) => n.compare(r2, toRaw(S)));
      return s2 === -1 ? l2.push(r2) : l2.splice(s2, 1), l2;
    } }));
  } };
  y([m, x$1], (a2, l2) => {
    var r2;
    n.closeListbox(), w(l2, h.Loose) || (a2.preventDefault(), (r2 = o(m)) == null || r2.focus());
  }, computed(() => e$1.value === 0)), provide(U, n), c(computed(() => u$1(e$1.value, { [0]: l.Open, [1]: l.Closed })));
  let p2 = computed(() => {
    var a2;
    return (a2 = o(m)) == null ? void 0 : a2.closest("form");
  });
  return onMounted(() => {
    watch([p2], () => {
      if (!p2.value || t2.defaultValue === void 0)
        return;
      function a2() {
        n.select(t2.defaultValue);
      }
      return p2.value.addEventListener("reset", a2), () => {
        var l2;
        (l2 = p2.value) == null || l2.removeEventListener("reset", a2);
      };
    }, { immediate: true });
  }), () => {
    let { name: a2, modelValue: l2, disabled: r2, form: s2, ...S } = t2, k = { open: e$1.value === 0, disabled: r2, value: y$1.value };
    return h$1(Fragment, [...a2 != null && y$1.value != null ? e({ [a2]: y$1.value }).map(([V, $]) => h$1(f$2, K({ features: a$1.Hidden, key: V, as: "input", type: "hidden", hidden: true, readOnly: true, form: s2, name: V, value: $ }))) : [], H({ ourProps: {}, theirProps: { ...u2, ...T(S, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: k, slots: b2, attrs: u2, name: "Listbox" })]);
  };
} }), Ae = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t()}` } }, setup(t2, { attrs: b2, slots: u2 }) {
  let L = j("ListboxLabel");
  function e2() {
    var d2;
    (d2 = o(L.buttonRef)) == null || d2.focus({ preventScroll: true });
  }
  return () => {
    let d2 = { open: L.listboxState.value === 0, disabled: L.disabled.value }, { id: m, ...x2 } = t2, f2 = { id: m, ref: L.labelRef, onClick: e2 };
    return H({ ourProps: f2, theirProps: x2, slot: d2, attrs: b2, slots: u2, name: "ListboxLabel" });
  };
} }), Fe = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t()}` } }, setup(t2, { attrs: b$1, slots: u2, expose: L }) {
  let e2 = j("ListboxButton");
  L({ el: e2.buttonRef, $el: e2.buttonRef });
  function d2(o$2) {
    switch (o$2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        o$2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a.First);
        });
        break;
      case o$1.ArrowUp:
        o$2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a.Last);
        });
        break;
    }
  }
  function m(o2) {
    switch (o2.key) {
      case o$1.Space:
        o2.preventDefault();
        break;
    }
  }
  function x2(o$12) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var i;
      return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })) : (o$12.preventDefault(), e2.openListbox(), ve(() => {
      var i;
      return (i = o(e2.optionsRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })));
  }
  let f2 = b(computed(() => ({ as: t2.as, type: b$1.type })), e2.buttonRef);
  return () => {
    var h2, y2;
    let o$12 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: i, ...w2 } = t2, R = { ref: e2.buttonRef, id: i, type: f2.value, "aria-haspopup": "listbox", "aria-controls": (h2 = o(e2.optionsRef)) == null ? void 0 : h2.id, "aria-expanded": e2.disabled.value ? void 0 : e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(y2 = o(e2.labelRef)) == null ? void 0 : y2.id, i].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: d2, onKeyup: m, onClick: x2 };
    return H({ ourProps: R, theirProps: w2, slot: o$12, attrs: b$1, slots: u2, name: "ListboxButton" });
  };
} }), Be = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t()}` } }, setup(t2, { attrs: b2, slots: u2, expose: L }) {
  let e2 = j("ListboxOptions"), d2 = ref(null);
  L({ el: e2.optionsRef, $el: e2.optionsRef });
  function m(o$2) {
    switch (d2.value && clearTimeout(d2.value), o$2.key) {
      case o$1.Space:
        if (e2.searchQuery.value !== "")
          return o$2.preventDefault(), o$2.stopPropagation(), e2.search(o$2.key);
      case o$1.Enter:
        if (o$2.preventDefault(), o$2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let i = e2.options.value[e2.activeOptionIndex.value];
          e2.select(i.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        }));
        break;
      case u$1(e2.orientation.value, { vertical: o$1.ArrowDown, horizontal: o$1.ArrowRight }):
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.Next);
      case u$1(e2.orientation.value, { vertical: o$1.ArrowUp, horizontal: o$1.ArrowLeft }):
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.First);
      case o$1.End:
      case o$1.PageDown:
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.Last);
      case o$1.Escape:
        o$2.preventDefault(), o$2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        o$2.preventDefault(), o$2.stopPropagation();
        break;
      default:
        o$2.key.length === 1 && (e2.search(o$2.key), d2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let x2 = p(), f2 = computed(() => x2 !== null ? (x2.value & l.Open) === l.Open : e2.listboxState.value === 0);
  return () => {
    var h2, y2, M, n;
    let o$12 = { open: e2.listboxState.value === 0 }, { id: i, ...w2 } = t2, R = { "aria-activedescendant": e2.activeOptionIndex.value === null || (h2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : h2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (n = (y2 = o(e2.labelRef)) == null ? void 0 : y2.id) != null ? n : (M = o(e2.buttonRef)) == null ? void 0 : M.id, "aria-orientation": e2.orientation.value, id: i, onKeydown: m, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return H({ ourProps: R, theirProps: w2, slot: o$12, attrs: b2, slots: u2, features: N.RenderStrategy | N.Static, visible: f2.value, name: "ListboxOptions" });
  };
} }), Ke = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t()}` } }, setup(t2, { slots: b2, attrs: u$2, expose: L }) {
  let e2 = j("ListboxOption"), d2 = ref(null);
  L({ el: d2, $el: d2 });
  let m = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t2.id : false), x2 = computed(() => u$1(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(t2.value)), [1]: () => toRaw(e2.value.value).some((n) => e2.compare(toRaw(n), toRaw(t2.value))) })), f2 = computed(() => u$1(e2.mode.value, { [1]: () => {
    var p2;
    let n = toRaw(e2.value.value);
    return ((p2 = e2.options.value.find((a2) => n.some((l2) => e2.compare(toRaw(l2), toRaw(a2.dataRef.value))))) == null ? void 0 : p2.id) === t2.id;
  }, [0]: () => x2.value })), o$12 = computed(() => ({ disabled: t2.disabled, value: t2.value, textValue: "", domRef: d2 }));
  onMounted(() => {
    var p2, a2;
    let n = (a2 = (p2 = o(d2)) == null ? void 0 : p2.textContent) == null ? void 0 : a2.toLowerCase().trim();
    n !== void 0 && (o$12.value.textValue = n);
  }), onMounted(() => e2.registerOption(t2.id, o$12)), onUnmounted(() => e2.unregisterOption(t2.id)), onMounted(() => {
    watch([e2.listboxState, x2], () => {
      e2.listboxState.value === 0 && x2.value && u$1(e2.mode.value, { [1]: () => {
        f2.value && e2.goToOption(a.Specific, t2.id);
      }, [0]: () => {
        e2.goToOption(a.Specific, t2.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && m.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var n, p2;
      return (p2 = (n = o(d2)) == null ? void 0 : n.scrollIntoView) == null ? void 0 : p2.call(n, { block: "nearest" });
    });
  });
  function i(n) {
    if (t2.disabled)
      return n.preventDefault();
    e2.select(t2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var p2;
      return (p2 = o(e2.buttonRef)) == null ? void 0 : p2.focus({ preventScroll: true });
    }));
  }
  function w2() {
    if (t2.disabled)
      return e2.goToOption(a.Nothing);
    e2.goToOption(a.Specific, t2.id);
  }
  let R = u();
  function h2(n) {
    R.update(n);
  }
  function y2(n) {
    R.wasMoved(n) && (t2.disabled || m.value || e2.goToOption(a.Specific, t2.id, 0));
  }
  function M(n) {
    R.wasMoved(n) && (t2.disabled || m.value && e2.goToOption(a.Nothing));
  }
  return () => {
    let { disabled: n } = t2, p2 = { active: m.value, selected: x2.value, disabled: n }, { id: a2, value: l2, disabled: r2, ...s2 } = t2, S = { id: a2, ref: d2, role: "option", tabIndex: n === true ? void 0 : -1, "aria-disabled": n === true ? true : void 0, "aria-selected": x2.value, disabled: void 0, onClick: i, onFocus: w2, onPointerenter: h2, onMouseenter: h2, onPointermove: y2, onMousemove: y2, onPointerleave: M, onMouseleave: M };
    return H({ ourProps: S, theirProps: s2, slot: p2, attrs: u$2, slots: b2, name: "ListboxOption" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "dropdown-right-top"
    }
  },
  setup(__props) {
    const props = __props;
    const currentStyle = toRef(props, "type");
    const availableThemes = [
      {
        key: "light",
        text: "Light"
      },
      {
        key: "dark",
        text: "Dark"
      },
      {
        key: "system",
        text: "System"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadlessListbox = je;
      const _component_HeadlessListboxLabel = Ae;
      const _component_HeadlessListboxButton = Fe;
      const _component_AwesomeLink = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_HeadlessListboxOptions = Be;
      const _component_HeadlessListboxOption = Ke;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      if (unref(currentStyle) === "dropdown-right-top") {
        _push(ssrRenderComponent(_component_HeadlessListbox, {
          modelValue: _ctx.$colorMode.preference,
          "onUpdate:modelValue": ($event) => _ctx.$colorMode.preference = $event,
          as: "div",
          class: "relative flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_HeadlessListboxLabel, { class: "sr-only" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Theme`);
                  } else {
                    return [
                      createTextVNode("Theme")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_HeadlessListboxButton, { type: "template" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="flex justify-center items-center dark:hidden"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent4, _scopeId3));
                          _push4(`</span><span class="justify-center items-center hidden dark:flex"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                              createVNode(_component_Icon, { name: "uil:sun" })
                            ]),
                            createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                              createVNode(_component_Icon, { name: "uil:moon" })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                            createVNode(_component_Icon, { name: "uil:sun" })
                          ]),
                          createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                            createVNode(_component_Icon, { name: "uil:moon" })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_HeadlessListboxOptions, { class: "p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(availableThemes, (theme) => {
                      _push3(ssrRenderComponent(_component_HeadlessListboxOption, {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-sm mr-2 flex items-center"${_scopeId3}>`);
                            if (theme.key === "light") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent4, _scopeId3));
                            } else if (theme.key === "dark") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent4, _scopeId3));
                            } else if (theme.key === "system") {
                              _push4(ssrRenderComponent(_component_Icon, { name: "uil:laptop" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</span> ${ssrInterpolate(theme.text)}`);
                          } else {
                            return [
                              createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                                theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: "uil:sun"
                                })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 1,
                                  name: "uil:moon"
                                })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                                  key: 2,
                                  name: "uil:laptop"
                                })) : createCommentVNode("", true)
                              ]),
                              createTextVNode(" " + toDisplayString(theme.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(availableThemes, (theme) => {
                        return createVNode(_component_HeadlessListboxOption, {
                          key: theme.key,
                          value: theme.key,
                          class: {
                            "py-2 px-2 flex items-center cursor-pointer": true,
                            "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                            "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                              theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "uil:sun"
                              })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "uil:moon"
                              })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                                key: 2,
                                name: "uil:laptop"
                              })) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" " + toDisplayString(theme.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_HeadlessListboxLabel, { class: "sr-only" }, {
                  default: withCtx(() => [
                    createTextVNode("Theme")
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlessListboxButton, { type: "template" }, {
                  default: withCtx(() => [
                    createVNode(_component_AwesomeLink, { class: "dark:text-gray-400 text-gray-600" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                          createVNode(_component_Icon, { name: "uil:sun" })
                        ]),
                        createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                          createVNode(_component_Icon, { name: "uil:moon" })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_HeadlessListboxOptions, { class: "p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(availableThemes, (theme) => {
                      return createVNode(_component_HeadlessListboxOption, {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": _ctx.$colorMode.preference === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": _ctx.$colorMode.preference !== theme.key
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                            theme.key === "light" ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: "uil:sun"
                            })) : theme.key === "dark" ? (openBlock(), createBlock(_component_Icon, {
                              key: 1,
                              name: "uil:moon"
                            })) : theme.key === "system" ? (openBlock(), createBlock(_component_Icon, {
                              key: 2,
                              name: "uil:laptop"
                            })) : createCommentVNode("", true)
                          ]),
                          createTextVNode(" " + toDisplayString(theme.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 64))
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
      if (unref(currentStyle) === "select-box") {
        _push(`<select class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"><!--[-->`);
        ssrRenderList(availableThemes, (theme) => {
          _push(`<option${ssrRenderAttr("value", theme.key)}>${ssrInterpolate(theme.text)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/NavbarDropdown/ThemeSwitcher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ThemeSwitcher-6d827a6d.mjs.map
