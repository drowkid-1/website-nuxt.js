import __nuxt_component_0 from "./Wrapper-a22f4fc5.js";
import _sfc_main$1 from "./Doc-1322eb9e.js";
import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import "vue-router";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./ContentDoc-18fa7b27.js";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
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
import "./head-fdff3821.js";
import "./ContentRenderer-973732d0.js";
import "./ContentRendererMarkdown-8446f29b.js";
import "scule";
import "property-information";
import "./ContentQuery-7bee636d.js";
import "./asyncData-9009f163.js";
import "./Header-e98b6953.js";
import "./Title-5388c357.js";
import "./index-f9fcc53e.js";
import "./Error-d2596c2b.js";
import "./index-618e2ce1.js";
import "./nuxt-link-7a607302.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_AwesomeContentDoc = _sfc_main$1;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AwesomeContentDoc, { "empty-tip": "Post im empty" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AwesomeContentDoc, { "empty-tip": "Post im empty" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/post/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-0e6ac693.js.map
