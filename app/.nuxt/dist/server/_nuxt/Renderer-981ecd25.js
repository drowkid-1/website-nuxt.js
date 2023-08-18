import __nuxt_component_0 from "./Wrapper-a22f4fc5.js";
import __nuxt_component_1 from "./Header-e98b6953.js";
import _sfc_main$1 from "./Title-5388c357.js";
import __nuxt_component_3 from "./index-f9fcc53e.js";
import _sfc_main$2 from "./ContentRenderer-973732d0.js";
import { defineComponent, withAsyncContext, withCtx, createVNode, unref, useSSRContext } from "vue";
import "hookable";
import { u as useAsyncData } from "./asyncData-9009f163.js";
import { l as abortNavigation, q as queryContent } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./ContentRendererMarkdown-8446f29b.js";
import "scule";
import "property-information";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Renderer",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      required: true
    },
    pageTitle: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      props.path,
      () => queryContent(props.path).findOne(),
      "$OI1I4RU3aR"
    )), __temp = await __temp, __restore(), __temp);
    if (!data)
      abortNavigation("404");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$1;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_ContentRenderer = _sfc_main$2;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: __props.pageTitle,
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: __props.pageTitle,
                      class: "capitalize"
                    }, null, 8, ["text"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LayoutPageSection, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ContentRenderer, {
                    value: unref(data)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ContentRenderer, {
                      value: unref(data)
                    }, null, 8, ["value"])
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
                    text: __props.pageTitle,
                    class: "capitalize"
                  }, null, 8, ["text"])
                ]),
                _: 1
              }),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_ContentRenderer, {
                    value: unref(data)
                  }, null, 8, ["value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/Content/Renderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Renderer-981ecd25.js.map
