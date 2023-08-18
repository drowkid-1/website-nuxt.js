import _sfc_main$1 from "./Welcome-97f0f892.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import "hookable";
import { e as useAppConfig, u as useHead } from "../server.mjs";
import "destr";
import "devalue";
import "vue-router";
import { ssrRenderComponent } from "vue/server-renderer";
import "./Wrapper-a22f4fc5.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-f9fcc53e.js";
import "./index-618e2ce1.js";
import "./nuxt-link-7a607302.js";
import "ufo";
import "klona";
import "./navbar-325d58c0.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { awesome } = useAppConfig();
    useHead({
      titleTemplate: "",
      title: (awesome == null ? void 0 : awesome.name) || "Bienvenidxs a DrowKid Web"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AwesomeWelcome = _sfc_main$1;
      _push(ssrRenderComponent(_component_AwesomeWelcome, mergeProps({ "with-alert": true }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-c88fe2e0.js.map
