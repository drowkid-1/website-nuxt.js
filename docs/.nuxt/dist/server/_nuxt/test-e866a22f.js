import __nuxt_component_0 from "./Wrapper-a22f4fc5.js";
import __nuxt_component_1 from "./Header-e98b6953.js";
import _sfc_main$1 from "./Title-5388c357.js";
import __nuxt_component_3 from "./index-f9fcc53e.js";
import _sfc_main$2 from "./Title-6c285d92.js";
import _sfc_main$3 from "./index-618e2ce1.js";
import _sfc_main$4 from "./TextInput-2ea03088.js";
import { defineComponent, withCtx, createVNode, unref, toDisplayString, withModifiers, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { d as defineStore, u as useHead } from "../server.mjs";
import "vue-router";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./nuxt-link-7a607302.js";
import "ufo";
import "./use-sync-props-077bb239.js";
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
const useCounter = defineStore("counter", {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
    increment2x() {
      this.count *= 2;
    }
  }
});
const useIdentity = defineStore("identity", {
  state: () => ({
    firstName: "Alfian",
    lastName: "Dwi"
  }),
  actions: {
    setFirstName(firstName) {
      this.firstName = firstName;
    },
    setLastName(lastName) {
      this.lastName = lastName;
    },
    reset() {
      this.firstName = "Alfian";
      this.lastName = "Dwi";
    }
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = useCounter();
    const identity = useIdentity();
    useHead({ title: "Test Page" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageWrapper = __nuxt_component_0;
      const _component_LayoutPageHeader = __nuxt_component_1;
      const _component_LayoutPageTitle = _sfc_main$1;
      const _component_LayoutPageSection = __nuxt_component_3;
      const _component_LayoutPageSectionTitle = _sfc_main$2;
      const _component_AwesomeButton = _sfc_main$3;
      const _component_AwesomeFormTextInput = _sfc_main$4;
      _push(ssrRenderComponent(_component_LayoutPageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LayoutPageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutPageTitle, {
                    text: "Testing",
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutPageTitle, {
                      text: "Testing",
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
                  _push3(ssrRenderComponent(_component_LayoutPageSectionTitle, { text: "Stores Test" }, null, _parent3, _scopeId2));
                  _push3(`<div class="mb-6"${_scopeId2}><div class="mb-2"${_scopeId2}>Counter : ${ssrInterpolate(unref(counter).count)}</div><div class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto capitalize",
                    type: "secondary",
                    size: "sm",
                    text: "increment",
                    onClick: unref(counter).increment
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto",
                    type: "secondary",
                    size: "sm",
                    text: "increment2x",
                    onClick: unref(counter).increment2x
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto capitalize",
                    type: "secondary",
                    size: "sm",
                    text: "decrement",
                    onClick: unref(counter).decrement
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "w-full md:w-auto capitalize",
                    type: "secondary",
                    size: "sm",
                    text: "reset",
                    onClick: unref(counter).reset
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mb-6"${_scopeId2}><div class="mb-2"${_scopeId2}><span class="capitalize"${_scopeId2}>Full Name : </span><span${_scopeId2}>${ssrInterpolate(unref(identity).fullName)}</span></div><div class="mb-2"${_scopeId2}><div class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AwesomeFormTextInput, {
                    modelValue: unref(identity).firstName,
                    "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                    size: "md",
                    class: "w-full md:w-1/3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeFormTextInput, {
                    modelValue: unref(identity).lastName,
                    "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                    size: "md",
                    class: "w-full md:w-1/3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AwesomeButton, {
                    class: "capitalize w-full md:w-auto",
                    text: "reset",
                    type: "secondary",
                    size: "md",
                    onClick: unref(identity).reset
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode(_component_LayoutPageSectionTitle, { text: "Stores Test" }),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                      createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: "increment",
                          onClick: withModifiers(unref(counter).increment, ["prevent"])
                        }, null, 8, ["onClick"]),
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto",
                          type: "secondary",
                          size: "sm",
                          text: "increment2x",
                          onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                        }, null, 8, ["onClick"]),
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: "decrement",
                          onClick: withModifiers(unref(counter).decrement, ["prevent"])
                        }, null, 8, ["onClick"]),
                        createVNode(_component_AwesomeButton, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: "reset",
                          onClick: withModifiers(unref(counter).reset, ["prevent"])
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("span", { class: "capitalize" }, "Full Name : "),
                        createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                      ]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                          createVNode(_component_AwesomeFormTextInput, {
                            modelValue: unref(identity).firstName,
                            "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_AwesomeFormTextInput, {
                            modelValue: unref(identity).lastName,
                            "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_AwesomeButton, {
                            class: "capitalize w-full md:w-auto",
                            text: "reset",
                            type: "secondary",
                            size: "md",
                            onClick: withModifiers(unref(identity).reset, ["prevent"])
                          }, null, 8, ["onClick"])
                        ])
                      ])
                    ])
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
                    text: "Testing",
                    class: "capitalize"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_LayoutPageSection, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutPageSectionTitle, { text: "Stores Test" }),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                    createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto capitalize",
                        type: "secondary",
                        size: "sm",
                        text: "increment",
                        onClick: withModifiers(unref(counter).increment, ["prevent"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto",
                        type: "secondary",
                        size: "sm",
                        text: "increment2x",
                        onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto capitalize",
                        type: "secondary",
                        size: "sm",
                        text: "decrement",
                        onClick: withModifiers(unref(counter).decrement, ["prevent"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_AwesomeButton, {
                        class: "w-full md:w-auto capitalize",
                        type: "secondary",
                        size: "sm",
                        text: "reset",
                        onClick: withModifiers(unref(counter).reset, ["prevent"])
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("span", { class: "capitalize" }, "Full Name : "),
                      createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                    ]),
                    createVNode("div", { class: "mb-2" }, [
                      createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                        createVNode(_component_AwesomeFormTextInput, {
                          modelValue: unref(identity).firstName,
                          "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_AwesomeFormTextInput, {
                          modelValue: unref(identity).lastName,
                          "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_AwesomeButton, {
                          class: "capitalize w-full md:w-auto",
                          text: "reset",
                          type: "secondary",
                          size: "md",
                          onClick: withModifiers(unref(identity).reset, ["prevent"])
                        }, null, 8, ["onClick"])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=test-e866a22f.js.map
