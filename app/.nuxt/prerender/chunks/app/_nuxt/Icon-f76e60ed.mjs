import { e as useAppConfig, j as useState, k as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, watch, withAsyncContext, mergeProps, unref, createVNode, resolveDynamicComponent } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.3.4/node_modules/@iconify/vue/dist/offline.mjs';
import { loadIcon } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.3.4/node_modules/@iconify/vue/dist/iconify.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/ofetch@1.1.1/node_modules/ofetch/dist/node.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue-router@4.2.4_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a3;
      var _a2;
      return (_a3 = (_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.class) != null ? _a3 : "icon";
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs))} data-v-117d4dd8></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-117d4dd8>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.4.2_vue@3.3.4/node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-117d4dd8"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=Icon-f76e60ed.mjs.map
