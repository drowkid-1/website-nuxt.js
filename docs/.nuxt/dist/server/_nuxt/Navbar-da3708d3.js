import { _ as __nuxt_component_0 } from "./nuxt-link-7a607302.js";
import __nuxt_component_1 from "./Icon-f76e60ed.js";
import _sfc_main$1 from "./Wrapper-d98d1e7a.js";
import _sfc_main$2 from "./ThemeSwitcher-6d827a6d.js";
import _sfc_main$3 from "./index-a3956a74.js";
import _sfc_main$4 from "./index-be73beac.js";
import __nuxt_component_6 from "./Group-d2f5b2d7.js";
import __nuxt_component_7 from "./Header-8d5b387c.js";
import _sfc_main$5 from "./HeaderTitle-d6e7dd6a.js";
import __nuxt_component_9 from "./Item-46ea880d.js";
import _sfc_main$6 from "./index-618e2ce1.js";
import { defineComponent, ref, provide, computed, onMounted, onUnmounted, watchEffect, inject, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, Transition, createCommentVNode, useSSRContext } from "vue";
import { b, o as o$1 } from "./hidden-940c75ed.js";
import { u, o, H, t, N } from "./env-f8cf6da3.js";
import { c, l, p } from "./open-closed-4c4062c8.js";
import _sfc_main$7 from "./ItemButton-60a1f4cb.js";
import "hookable";
import "destr";
import "devalue";
import { e as useAppConfig } from "../server.mjs";
import { u as useAwesomeScreen } from "./use-awesome-screen-5d60d640.js";
import { a as parseMenuRoute, p as parseMenuTitle } from "./navbar-325d58c0.js";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import "ufo";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
import "./Item-e6cc376d.js";
import "./use-outside-click-a38f5785.js";
var j = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))(j || {});
let x = Symbol("DisclosureContext");
function g(t2) {
  let r = inject(x, null);
  if (r === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, g), o2;
  }
  return r;
}
let B = Symbol("DisclosurePanelContext");
function $() {
  return inject(B, null);
}
let Q = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t2, { slots: r, attrs: o$12 }) {
  let u$1 = ref(t2.defaultOpen ? 0 : 1), e = ref(null), i = ref(null), s = { buttonId: ref(null), panelId: ref(null), disclosureState: u$1, panel: e, button: i, toggleDisclosure() {
    u$1.value = u(u$1.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    u$1.value !== 1 && (u$1.value = 1);
  }, close(l2) {
    s.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o(l2) : o(s.button) : o(s.button))();
    a == null || a.focus();
  } };
  return provide(x, s), c(computed(() => u(u$1.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t2, c2 = { open: u$1.value === 0, close: s.close };
    return H({ theirProps: a, ourProps: {}, slot: c2, slots: r, attrs: o$12, name: "Disclosure" });
  };
} }), V = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-disclosure-button-${t()}` } }, setup(t2, { attrs: r, slots: o$2, expose: u2 }) {
  let e = g("DisclosureButton");
  onMounted(() => {
    e.buttonId.value = t2.id;
  }), onUnmounted(() => {
    e.buttonId.value = null;
  });
  let i = $(), s = computed(() => i === null ? false : i.value === e.panelId.value), l2 = ref(null);
  u2({ el: l2, $el: l2 }), s.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = b(computed(() => ({ as: t2.as, type: r.type })), l2);
  function c2() {
    var n;
    t2.disabled || (s.value ? (e.toggleDisclosure(), (n = o(e.button)) == null || n.focus()) : e.toggleDisclosure());
  }
  function D(n) {
    var S;
    if (!t2.disabled)
      if (s.value)
        switch (n.key) {
          case o$1.Space:
          case o$1.Enter:
            n.preventDefault(), n.stopPropagation(), e.toggleDisclosure(), (S = o(e.button)) == null || S.focus();
            break;
        }
      else
        switch (n.key) {
          case o$1.Space:
          case o$1.Enter:
            n.preventDefault(), n.stopPropagation(), e.toggleDisclosure();
            break;
        }
  }
  function T(n) {
    switch (n.key) {
      case o$1.Space:
        n.preventDefault();
        break;
    }
  }
  return () => {
    let n = { open: e.disclosureState.value === 0 }, { id: S, ...k } = t2, K = s.value ? { ref: l2, type: a.value, onClick: c2, onKeydown: D } : { id: S, ref: l2, type: a.value, "aria-expanded": t2.disabled ? void 0 : e.disclosureState.value === 0, "aria-controls": o(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c2, onKeydown: D, onKeyup: T };
    return H({ ourProps: K, theirProps: k, slot: n, attrs: r, slots: o$2, name: "DisclosureButton" });
  };
} }), X = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-disclosure-panel-${t()}` } }, setup(t2, { attrs: r, slots: o2, expose: u2 }) {
  let e = g("DisclosurePanel");
  onMounted(() => {
    e.panelId.value = t2.id;
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), u2({ el: e.panel, $el: e.panel }), provide(B, e.panelId);
  let i = p(), s = computed(() => i !== null ? (i.value & l.Open) === l.Open : e.disclosureState.value === 0);
  return () => {
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c2 } = t2, D = { id: a, ref: e.panel };
    return H({ ourProps: D, theirProps: c2, slot: l2, attrs: r, slots: o2, features: N.RenderStrategy | N.Static, visible: s.value, name: "DisclosurePanel" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { awesome } = useAppConfig();
    const $screen = useAwesomeScreen();
    const menus = computed(
      () => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = awesome == null ? void 0 : awesome.layout) == null ? void 0 : _a.page) == null ? void 0 : _b.navbar) == null ? void 0 : _c.menus) || [];
      }
    );
    const showDrawer = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_LayoutPageNavbarMenuWrapper = _sfc_main$1;
      const _component_LayoutPageNavbarDropdownThemeSwitcher = _sfc_main$2;
      const _component_AwesomeLink = _sfc_main$3;
      const _component_AwesomeActionSheet = _sfc_main$4;
      const _component_AwesomeActionSheetGroup = __nuxt_component_6;
      const _component_AwesomeActionSheetHeader = __nuxt_component_7;
      const _component_AwesomeActionSheetHeaderTitle = _sfc_main$5;
      const _component_AwesomeActionSheetItem = __nuxt_component_9;
      const _component_AwesomeButton = _sfc_main$6;
      const _component_HeadlessDisclosure = Q;
      const _component_HeadlessDisclosureButton = V;
      const _component_HeadlessDisclosurePanel = X;
      const _component_AwesomeActionSheetItemButton = _sfc_main$7;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5]" }, _attrs))}><div class="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4"><div>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "font-bold text-lg text-primary-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "simple-icons:nuxtdotjs",
                class: "font-black text-xl font-mono mr-2 inline-block"
              }, null, _parent2, _scopeId));
              _push2(`<span class="capitalize"${_scopeId}>${ssrInterpolate(unref(awesome).name)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "simple-icons:nuxtdotjs",
                  class: "font-black text-xl font-mono mr-2 inline-block"
                }),
                createVNode("span", { class: "capitalize" }, toDisplayString(unref(awesome).name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div>`);
      if (unref($screen).higherThan("md", unref($screen).current.value)) {
        _push(`<div class="${ssrRenderClass([{ "divide-x divide-gray-500": unref(menus).length > 0 }, "flex space-x-4 items-center"])}"><div class="flex space-x-4 text-sm items-center"><!--[-->`);
        ssrRenderList(unref(menus), (item, i) => {
          _push(ssrRenderComponent(_component_LayoutPageNavbarMenuWrapper, { menu: item }, null, _parent));
        });
        _push(`<!--]--></div><div class="pl-4 flex space-x-3 text-xl">`);
        _push(ssrRenderComponent(_component_LayoutPageNavbarDropdownThemeSwitcher, null, null, _parent));
        if ((_c = (_b = (_a = unref(awesome)) == null ? void 0 : _a.project) == null ? void 0 : _b.links) == null ? void 0 : _c.github) {
          _push(ssrRenderComponent(_component_AwesomeLink, {
            class: "dark:text-gray-400 text-gray-600",
            href: (_f = (_e = (_d = unref(awesome)) == null ? void 0 : _d.project) == null ? void 0 : _e.links) == null ? void 0 : _f.github
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "mdi:github-face" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "mdi:github-face" })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="${ssrRenderClass([{ "divide-x divide-gray-500": unref(menus).length > 0 }, "flex space-x-4 items-center"])}"><div class="pl-4 flex space-x-3 text-xl">`);
        if ((_i = (_h = (_g = unref(awesome)) == null ? void 0 : _g.project) == null ? void 0 : _h.links) == null ? void 0 : _i.github) {
          _push(ssrRenderComponent(_component_AwesomeLink, {
            class: "text-gray-400 hover:text-gray-100",
            onClick: () => showDrawer.value = !unref(showDrawer)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "heroicons:bars-3-bottom-right-20-solid" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "heroicons:bars-3-bottom-right-20-solid" })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div>`);
      if (!unref($screen).higherThan("md", unref($screen).current.value) && unref(showDrawer)) {
        _push(ssrRenderComponent(_component_AwesomeActionSheet, {
          onClose: () => showDrawer.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_AwesomeActionSheetGroup, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AwesomeActionSheetHeader, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AwesomeActionSheetHeaderTitle, { text: "Menu" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AwesomeActionSheetHeaderTitle, { text: "Menu" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AwesomeActionSheetItem, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(menus), (item, i) => {
                            _push4(`<!--[-->`);
                            if ((item == null ? void 0 : item.type) === "link") {
                              _push4(ssrRenderComponent(_component_NuxtLink, {
                                key: i,
                                to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                class: "w-full py-2"
                              }, {
                                default: withCtx(({ isActive }, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span class="${ssrRenderClass({
                                      "text-gray-900 dark:text-gray-100 font-bold": isActive,
                                      "text-gray-700 dark:text-gray-300": !isActive
                                    })}"${_scopeId4}>${ssrInterpolate(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title))}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", {
                                        class: {
                                          "text-gray-900 dark:text-gray-100 font-bold": isActive,
                                          "text-gray-700 dark:text-gray-300": !isActive
                                        }
                                      }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 3)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if ((item == null ? void 0 : item.type) === "button") {
                              _push4(ssrRenderComponent(_component_AwesomeButton, {
                                key: i,
                                text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title),
                                size: "sm",
                                to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                class: "w-full"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if ((item == null ? void 0 : item.type) === "dropdown") {
                              _push4(`<div class="w-full"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_HeadlessDisclosure, null, {
                                default: withCtx(({ open }, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_HeadlessDisclosureButton, {
                                      key: i,
                                      class: [
                                        "text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all",
                                        open ? "font-bold" : ""
                                      ]
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<span${_scopeId5}>${ssrInterpolate(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title))}</span>`);
                                          _push6(ssrRenderComponent(_component_Icon, {
                                            name: "carbon:chevron-right",
                                            class: ["ml-1", [
                                              open ? "duration-300 transition-all transform rotate-90" : "rotate-0"
                                            ]]
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode("span", null, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 1),
                                            createVNode(_component_Icon, {
                                              name: "carbon:chevron-right",
                                              class: ["ml-1", [
                                                open ? "duration-300 transition-all transform rotate-90" : "rotate-0"
                                              ]]
                                            }, null, 8, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(``);
                                    _push5(ssrRenderComponent(_component_HeadlessDisclosurePanel, { class: "text-gray-500 pb-2" }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<!--[-->`);
                                          ssrRenderList((item == null ? void 0 : item.children) || [], (child, j2) => {
                                            _push6(ssrRenderComponent(_component_NuxtLink, {
                                              to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(child.to),
                                              class: "w-full py-2"
                                            }, {
                                              default: withCtx(({ isActive }, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`<span class="${ssrRenderClass([
                                                    isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                                                  ])}"${_scopeId6}>${ssrInterpolate(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(child == null ? void 0 : child.title))}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", {
                                                      class: [
                                                        isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                                                      ]
                                                    }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(child == null ? void 0 : child.title)), 3)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          });
                                          _push6(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList((item == null ? void 0 : item.children) || [], (child, j2) => {
                                              return openBlock(), createBlock(_component_NuxtLink, {
                                                key: j2,
                                                to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(child.to),
                                                class: "w-full py-2"
                                              }, {
                                                default: withCtx(({ isActive }) => [
                                                  createVNode("span", {
                                                    class: [
                                                      isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                                                    ]
                                                  }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(child == null ? void 0 : child.title)), 3)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      (openBlock(), createBlock(_component_HeadlessDisclosureButton, {
                                        key: i,
                                        class: [
                                          "text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all",
                                          open ? "font-bold" : ""
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 1),
                                          createVNode(_component_Icon, {
                                            name: "carbon:chevron-right",
                                            class: ["ml-1", [
                                              open ? "duration-300 transition-all transform rotate-90" : "rotate-0"
                                            ]]
                                          }, null, 8, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])),
                                      createVNode(Transition, {
                                        "enter-active-class": "transition duration-100 ease-out",
                                        "enter-from-class": "transform scale-95 opacity-0",
                                        "enter-to-class": "transform scale-100 opacity-100",
                                        "leave-active-class": "transition duration-75 ease-out",
                                        "leave-from-class": "transform scale-100 opacity-100",
                                        "leave-to-class": "transform scale-95 opacity-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_HeadlessDisclosurePanel, { class: "text-gray-500 pb-2" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList((item == null ? void 0 : item.children) || [], (child, j2) => {
                                                return openBlock(), createBlock(_component_NuxtLink, {
                                                  key: j2,
                                                  to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(child.to),
                                                  class: "w-full py-2"
                                                }, {
                                                  default: withCtx(({ isActive }) => [
                                                    createVNode("span", {
                                                      class: [
                                                        isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                                                      ]
                                                    }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(child == null ? void 0 : child.title)), 3)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"]);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                                return openBlock(), createBlock(Fragment, null, [
                                  (item == null ? void 0 : item.type) === "link" ? (openBlock(), createBlock(_component_NuxtLink, {
                                    key: i,
                                    to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                    class: "w-full py-2"
                                  }, {
                                    default: withCtx(({ isActive }) => [
                                      createVNode("span", {
                                        class: {
                                          "text-gray-900 dark:text-gray-100 font-bold": isActive,
                                          "text-gray-700 dark:text-gray-300": !isActive
                                        }
                                      }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 3)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])) : createCommentVNode("", true),
                                  (item == null ? void 0 : item.type) === "button" ? (openBlock(), createBlock(_component_AwesomeButton, {
                                    key: i,
                                    text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title),
                                    size: "sm",
                                    to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                    class: "w-full"
                                  }, null, 8, ["text", "to"])) : createCommentVNode("", true),
                                  (item == null ? void 0 : item.type) === "dropdown" ? (openBlock(), createBlock("div", {
                                    key: i,
                                    class: "w-full"
                                  }, [
                                    createVNode(_component_HeadlessDisclosure, null, {
                                      default: withCtx(({ open }) => [
                                        (openBlock(), createBlock(_component_HeadlessDisclosureButton, {
                                          key: i,
                                          class: [
                                            "text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all",
                                            open ? "font-bold" : ""
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 1),
                                            createVNode(_component_Icon, {
                                              name: "carbon:chevron-right",
                                              class: ["ml-1", [
                                                open ? "duration-300 transition-all transform rotate-90" : "rotate-0"
                                              ]]
                                            }, null, 8, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])),
                                        createVNode(Transition, {
                                          "enter-active-class": "transition duration-100 ease-out",
                                          "enter-from-class": "transform scale-95 opacity-0",
                                          "enter-to-class": "transform scale-100 opacity-100",
                                          "leave-active-class": "transition duration-75 ease-out",
                                          "leave-from-class": "transform scale-100 opacity-100",
                                          "leave-to-class": "transform scale-95 opacity-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_HeadlessDisclosurePanel, { class: "text-gray-500 pb-2" }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList((item == null ? void 0 : item.children) || [], (child, j2) => {
                                                  return openBlock(), createBlock(_component_NuxtLink, {
                                                    key: j2,
                                                    to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(child.to),
                                                    class: "w-full py-2"
                                                  }, {
                                                    default: withCtx(({ isActive }) => [
                                                      createVNode("span", {
                                                        class: [
                                                          isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                                                        ]
                                                      }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(child == null ? void 0 : child.title)), 3)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"]);
                                                }), 128))
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : createCommentVNode("", true)
                                ], 64);
                              }), 256))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AwesomeActionSheetItem, { class: "flex flex-col" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="pb-2"${_scopeId3}><div class="mt-2 mb-2 text-sm font-bold capitalize"${_scopeId3}> Change Theme </div>`);
                          _push4(ssrRenderComponent(_component_LayoutPageNavbarDropdownThemeSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "pb-2" }, [
                              createVNode("div", { class: "mt-2 mb-2 text-sm font-bold capitalize" }, " Change Theme "),
                              createVNode(_component_LayoutPageNavbarDropdownThemeSwitcher, { type: "select-box" })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AwesomeActionSheetHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_AwesomeActionSheetHeaderTitle, { text: "Menu" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AwesomeActionSheetItem, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                              return openBlock(), createBlock(Fragment, null, [
                                (item == null ? void 0 : item.type) === "link" ? (openBlock(), createBlock(_component_NuxtLink, {
                                  key: i,
                                  to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                  class: "w-full py-2"
                                }, {
                                  default: withCtx(({ isActive }) => [
                                    createVNode("span", {
                                      class: {
                                        "text-gray-900 dark:text-gray-100 font-bold": isActive,
                                        "text-gray-700 dark:text-gray-300": !isActive
                                      }
                                    }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 3)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])) : createCommentVNode("", true),
                                (item == null ? void 0 : item.type) === "button" ? (openBlock(), createBlock(_component_AwesomeButton, {
                                  key: i,
                                  text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title),
                                  size: "sm",
                                  to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                  class: "w-full"
                                }, null, 8, ["text", "to"])) : createCommentVNode("", true),
                                (item == null ? void 0 : item.type) === "dropdown" ? (openBlock(), createBlock("div", {
                                  key: i,
                                  class: "w-full"
                                }, [
                                  createVNode(_component_HeadlessDisclosure, null, {
                                    default: withCtx(({ open }) => [
                                      (openBlock(), createBlock(_component_HeadlessDisclosureButton, {
                                        key: i,
                                        class: [
                                          "text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all",
                                          open ? "font-bold" : ""
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 1),
                                          createVNode(_component_Icon, {
                                            name: "carbon:chevron-right",
                                            class: ["ml-1", [
                                              open ? "duration-300 transition-all transform rotate-90" : "rotate-0"
                                            ]]
                                          }, null, 8, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])),
                                      createVNode(Transition, {
                                        "enter-active-class": "transition duration-100 ease-out",
                                        "enter-from-class": "transform scale-95 opacity-0",
                                        "enter-to-class": "transform scale-100 opacity-100",
                                        "leave-active-class": "transition duration-75 ease-out",
                                        "leave-from-class": "transform scale-100 opacity-100",
                                        "leave-to-class": "transform scale-95 opacity-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_HeadlessDisclosurePanel, { class: "text-gray-500 pb-2" }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList((item == null ? void 0 : item.children) || [], (child, j2) => {
                                                return openBlock(), createBlock(_component_NuxtLink, {
                                                  key: j2,
                                                  to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(child.to),
                                                  class: "w-full py-2"
                                                }, {
                                                  default: withCtx(({ isActive }) => [
                                                    createVNode("span", {
                                                      class: [
                                                        isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                                                      ]
                                                    }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(child == null ? void 0 : child.title)), 3)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"]);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AwesomeActionSheetItem, { class: "flex flex-col" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "pb-2" }, [
                            createVNode("div", { class: "mt-2 mb-2 text-sm font-bold capitalize" }, " Change Theme "),
                            createVNode(_component_LayoutPageNavbarDropdownThemeSwitcher, { type: "select-box" })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AwesomeActionSheetGroup, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AwesomeActionSheetItemButton, { class: "flex justify-center items-center text-base space-x-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "mdi:github-face",
                            class: "text-lg font-bold"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="text-sm"${_scopeId3}>Github</span>`);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "mdi:github-face",
                              class: "text-lg font-bold"
                            }),
                            createVNode("span", { class: "text-sm" }, "Github")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AwesomeActionSheetItemButton, { class: "flex justify-center items-center text-base space-x-2" }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "mdi:github-face",
                            class: "text-lg font-bold"
                          }),
                          createVNode("span", { class: "text-sm" }, "Github")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_AwesomeActionSheetGroup, null, {
                  default: withCtx(() => [
                    createVNode(_component_AwesomeActionSheetHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_AwesomeActionSheetHeaderTitle, { text: "Menu" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AwesomeActionSheetItem, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                            return openBlock(), createBlock(Fragment, null, [
                              (item == null ? void 0 : item.type) === "link" ? (openBlock(), createBlock(_component_NuxtLink, {
                                key: i,
                                to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                class: "w-full py-2"
                              }, {
                                default: withCtx(({ isActive }) => [
                                  createVNode("span", {
                                    class: {
                                      "text-gray-900 dark:text-gray-100 font-bold": isActive,
                                      "text-gray-700 dark:text-gray-300": !isActive
                                    }
                                  }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 3)
                                ]),
                                _: 2
                              }, 1032, ["to"])) : createCommentVNode("", true),
                              (item == null ? void 0 : item.type) === "button" ? (openBlock(), createBlock(_component_AwesomeButton, {
                                key: i,
                                text: ("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title),
                                size: "sm",
                                to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(item.to),
                                class: "w-full"
                              }, null, 8, ["text", "to"])) : createCommentVNode("", true),
                              (item == null ? void 0 : item.type) === "dropdown" ? (openBlock(), createBlock("div", {
                                key: i,
                                class: "w-full"
                              }, [
                                createVNode(_component_HeadlessDisclosure, null, {
                                  default: withCtx(({ open }) => [
                                    (openBlock(), createBlock(_component_HeadlessDisclosureButton, {
                                      key: i,
                                      class: [
                                        "text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all",
                                        open ? "font-bold" : ""
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(item == null ? void 0 : item.title)), 1),
                                        createVNode(_component_Icon, {
                                          name: "carbon:chevron-right",
                                          class: ["ml-1", [
                                            open ? "duration-300 transition-all transform rotate-90" : "rotate-0"
                                          ]]
                                        }, null, 8, ["class"])
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])),
                                    createVNode(Transition, {
                                      "enter-active-class": "transition duration-100 ease-out",
                                      "enter-from-class": "transform scale-95 opacity-0",
                                      "enter-to-class": "transform scale-100 opacity-100",
                                      "leave-active-class": "transition duration-75 ease-out",
                                      "leave-from-class": "transform scale-100 opacity-100",
                                      "leave-to-class": "transform scale-95 opacity-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_HeadlessDisclosurePanel, { class: "text-gray-500 pb-2" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList((item == null ? void 0 : item.children) || [], (child, j2) => {
                                              return openBlock(), createBlock(_component_NuxtLink, {
                                                key: j2,
                                                to: ("parseMenuRoute" in _ctx ? _ctx.parseMenuRoute : unref(parseMenuRoute))(child.to),
                                                class: "w-full py-2"
                                              }, {
                                                default: withCtx(({ isActive }) => [
                                                  createVNode("span", {
                                                    class: [
                                                      isActive ? "text-gray-900 dark:text-gray-100 font-bold" : "text-gray-700 dark:text-gray-300"
                                                    ]
                                                  }, toDisplayString(("parseMenuTitle" in _ctx ? _ctx.parseMenuTitle : unref(parseMenuTitle))(child == null ? void 0 : child.title)), 3)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])) : createCommentVNode("", true)
                            ], 64);
                          }), 256))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AwesomeActionSheetItem, { class: "flex flex-col" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pb-2" }, [
                          createVNode("div", { class: "mt-2 mb-2 text-sm font-bold capitalize" }, " Change Theme "),
                          createVNode(_component_LayoutPageNavbarDropdownThemeSwitcher, { type: "select-box" })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_AwesomeActionSheetGroup, null, {
                  default: withCtx(() => [
                    createVNode(_component_AwesomeActionSheetItemButton, { class: "flex justify-center items-center text-base space-x-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mdi:github-face",
                          class: "text-lg font-bold"
                        }),
                        createVNode("span", { class: "text-sm" }, "Github")
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
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layouts/Page/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Navbar-da3708d3.js.map
