import { k as useNuxtApp } from '../server.mjs';

function parseMenuTitle(title) {
  return typeof title === "function" ? title(useNuxtApp()) : title || "";
}
function parseMenuRoute(to) {
  return typeof to === "function" ? to(useNuxtApp()) : to;
}

export { parseMenuRoute as a, parseMenuTitle as p };
//# sourceMappingURL=navbar-325d58c0.mjs.map
