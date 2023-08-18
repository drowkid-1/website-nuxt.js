import __nuxt_component_1 from './Icon-f76e60ed.mjs';
import { defineComponent, reactive, ref, computed, unref, mergeProps, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { TransitionRoot, TransitionChild } from 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@headlessui+vue@1.7.13_vue@3.3.4/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import '../server.mjs';
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
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.3.4/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///data/data/com.termux/files/home/nuxt3-awesome/node_modules/.pnpm/@iconify+vue@4.1.1_vue@3.3.4/node_modules/@iconify/vue/dist/iconify.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlertBanner",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: void 0
    },
    text: {
      type: String,
      default: void 0
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(__props) {
    const props = __props;
    const styles = reactive({
      primary: "",
      success: "dark:from-green-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900",
      warning: "dark:from-yellow-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900",
      danger: "dark:from-red-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900"
    });
    const textStyles = reactive({
      primary: "text-black dark:text-white",
      success: "text-green-500",
      warning: "text-orange-500",
      danger: "text-red-500"
    });
    const isDestroyed = ref(false);
    const selectedType = computed(() => {
      if (["primary", "success", "warning", "danger"].includes(props.type))
        return props.type;
      return "primary";
    });
    const selectedStyle = computed(() => styles[selectedType.value]);
    const selectedTextStyle = computed(() => textStyles[selectedType.value]);
    const close = () => {
      isDestroyed.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        show: !unref(isDestroyed),
        appear: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TransitionChild), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-300 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass(`bg-gray-200 dark:bg-gray-800 bg-gradient-to-r shadow-white/50 dark:shadow-gray-950/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`)}"${_scopeId2}><div class="flex items-center justify-center"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    if (unref(selectedType) === "success") {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "mdi:check-circle",
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(selectedType) === "danger") {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "icon-clarity:times-circle-solid",
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(selectedType) === "warning") {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "icon-bi:exclamation-circle-fill",
                        class: `text-2xl ${unref(selectedTextStyle)}`
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="flex-1"${_scopeId2}><div class="${ssrRenderClass(`font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push3(`${ssrInterpolate(props.title)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div><div class="text-gray-700 dark:text-gray-100"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push3(`${ssrInterpolate(props.text)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div></div><div${_scopeId2}><button class="text-gray-600 hover:text-red-500 dark:text-gray-400 font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "clarity:times-line" }, null, _parent3, _scopeId2));
                  _push3(`</button></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: `bg-gray-200 dark:bg-gray-800 bg-gradient-to-r shadow-white/50 dark:shadow-gray-950/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`
                    }, [
                      createVNode("div", { class: "flex items-center justify-center" }, [
                        renderSlot(_ctx.$slots, "icon", {}, () => [
                          unref(selectedType) === "success" ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "mdi:check-circle",
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          unref(selectedType) === "danger" ? (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: "icon-clarity:times-circle-solid",
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          unref(selectedType) === "warning" ? (openBlock(), createBlock(_component_Icon, {
                            key: 2,
                            name: "icon-bi:exclamation-circle-fill",
                            class: `text-2xl ${unref(selectedTextStyle)}`
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("div", {
                          class: `font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(props.title), 1)
                          ])
                        ], 2),
                        createVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(props.text), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("button", {
                          class: "text-gray-600 hover:text-red-500 dark:text-gray-400 font-bold",
                          onClick: close
                        }, [
                          createVNode(_component_Icon, { name: "clarity:times-line" })
                        ])
                      ])
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TransitionChild), {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-300 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: `bg-gray-200 dark:bg-gray-800 bg-gradient-to-r shadow-white/50 dark:shadow-gray-950/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${unref(selectedStyle)}`
                  }, [
                    createVNode("div", { class: "flex items-center justify-center" }, [
                      renderSlot(_ctx.$slots, "icon", {}, () => [
                        unref(selectedType) === "success" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "mdi:check-circle",
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        unref(selectedType) === "danger" ? (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "icon-clarity:times-circle-solid",
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        unref(selectedType) === "warning" ? (openBlock(), createBlock(_component_Icon, {
                          key: 2,
                          name: "icon-bi:exclamation-circle-fill",
                          class: `text-2xl ${unref(selectedTextStyle)}`
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", {
                        class: `font-bold text-lg mb-0.5 ${unref(selectedTextStyle)}`
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(props.title), 1)
                        ])
                      ], 2),
                      createVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(props.text), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("button", {
                        class: "text-gray-600 hover:text-red-500 dark:text-gray-400 font-bold",
                        onClick: close
                      }, [
                        createVNode(_component_Icon, { name: "clarity:times-line" })
                      ])
                    ])
                  ], 2)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/awesome/AlertBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AlertBanner-4980622e.mjs.map
