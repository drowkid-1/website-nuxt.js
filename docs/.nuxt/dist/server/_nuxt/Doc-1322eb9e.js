import _sfc_main$1 from "./ContentDoc-18fa7b27.js";
import __nuxt_component_1 from "./Header-e98b6953.js";
import _sfc_main$2 from "./Title-5388c357.js";
import __nuxt_component_3 from "./index-f9fcc53e.js";
import _sfc_main$3 from "./ContentRenderer-973732d0.js";
import _sfc_main$4 from "./Error-d2596c2b.js";
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
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
import "./head-fdff3821.js";
import "./ContentQuery-7bee636d.js";
import "./asyncData-9009f163.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./ContentRendererMarkdown-8446f29b.js";
import "scule";
import "property-information";
import "./Wrapper-a22f4fc5.js";
import "./index-618e2ce1.js";
import "./nuxt-link-7a607302.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Doc",
  __ssrInlineRender: true,
  props: {
    emptyTip: {
      type: String,
      required: false,
      default: "This page is empty"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$1;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$2;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_ContentRenderer = _sfc_main$3;
      const _component_AwesomeError = _sfc_main$4;
      _push(ssrRenderComponent(_component_ContentDoc, _attrs, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: doc.title
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: doc.title
                    }, null, 8, ["text"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LayoutPageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageTitle, {
                    text: doc.title
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>${ssrInterpolate(__props.emptyTip)}</h1>`);
          } else {
            return [
              createVNode("h1", null, toDisplayString(__props.emptyTip), 1)
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeError, {
              code: 404,
              wrap: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AwesomeError, {
                code: 404,
                wrap: ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Content/Doc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Doc-1322eb9e.js.map
