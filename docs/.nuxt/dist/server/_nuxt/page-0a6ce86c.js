import _sfc_main$1 from "./Navbar-da3708d3.js";
import __nuxt_component_1 from "./Content-98cfa635.js";
import _sfc_main$2 from "./Footer-c69c6d7b.js";
import { mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./nuxt-link-7a607302.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
import "./Icon-f76e60ed.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./Wrapper-d98d1e7a.js";
import "./Item-e6cc376d.js";
import "./index-618e2ce1.js";
import "./navbar-325d58c0.js";
import "./env-f8cf6da3.js";
import "./hidden-940c75ed.js";
import "./open-closed-4c4062c8.js";
import "./use-outside-click-a38f5785.js";
import "./ThemeSwitcher-6d827a6d.js";
import "./index-a3956a74.js";
import "./index-be73beac.js";
import "./Group-d2f5b2d7.js";
import "./ItemButton-60a1f4cb.js";
import "./Header-8d5b387c.js";
import "./HeaderTitle-d6e7dd6a.js";
import "./Item-46ea880d.js";
import "./use-awesome-screen-5d60d640.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageNavbar = _sfc_main$1;
  const _component_LayoutPageContent = __nuxt_component_1;
  const _component_LayoutPageFooter = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutPageNavbar, { class: "h-[64px] max-h-[64px]" }, null, _parent));
  _push(ssrRenderComponent(_component_LayoutPageContent, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_LayoutPageFooter, { class: "h-[52px] md:h-[42px]" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  page as default
};
//# sourceMappingURL=page-0a6ce86c.js.map
