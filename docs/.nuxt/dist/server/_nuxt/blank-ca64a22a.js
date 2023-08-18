import __nuxt_component_0 from "./Wrapper-a22f4fc5.js";
import __nuxt_component_1 from "./Header-e98b6953.js";
import _sfc_main$1 from "./Title-5388c357.js";
import __nuxt_component_3 from "./index-f9fcc53e.js";
import _sfc_main$2 from "./Title-6c285d92.js";
import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import "vue-router";
import { u as useHead } from "../server.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "h3";
import "ufo";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blank",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Blank Page" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$1;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_LayoutPageSectionTitle = _sfc_main$2;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: "Blank Page",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: "Blank Page",
                      class: "capitalize"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageSectionTitle, { text: "Section Title" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>My Content</div>`);
                } else {
                  return [
                    createVNode(_component_LayoutPageSectionTitle, { text: "Section Title" }),
                    createVNode("div", null, "My Content")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageSectionTitle, { text: "Another Section" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>My Content</div>`);
                } else {
                  return [
                    createVNode(_component_LayoutPageSectionTitle, { text: "Another Section" }),
                    createVNode("div", null, "My Content")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageTitle, {
                    text: "Blank Page",
                    class: "capitalize"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageSectionTitle, { text: "Section Title" }),
                  createVNode("div", null, "My Content")
                ]),
                _: 1
              }),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageSectionTitle, { text: "Another Section" }),
                  createVNode("div", null, "My Content")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=blank-ca64a22a.js.map
