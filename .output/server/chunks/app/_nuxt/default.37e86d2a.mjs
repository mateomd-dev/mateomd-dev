import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$1$1 } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import 'defu';
import '../../nitro/firebase.mjs';
import 'node-fetch-native/polyfill';
import 'firebase-functions';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';

const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><button class="btn">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "magnifying-glass"] }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-51b3f660><button type="button" class="btn text-nowrap btn-sm" data-v-51b3f660>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "envelope"] }, null, _parent));
  _push(`<span class="d-none d-sm-inline-block ps-2" data-v-51b3f660>SUBSCRIBE</span></button></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubscribeButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-51b3f660"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_SearchBar = __nuxt_component_0$1;
  const _component_SubscribeButton = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-db77557b><div class="row justify-content-evenly align-items-center" data-v-db77557b>`);
  _push(ssrRenderComponent(_component_SearchBar, { class: "text-start me-auto ps-3 col-2" }, null, _parent));
  _push(`<h1 class="logo text-center col-auto" data-v-db77557b>Mateo</h1>`);
  _push(ssrRenderComponent(_component_SubscribeButton, { class: "text-end ms-auto pe-3 col-2" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-db77557b"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_NuxtLink = __nuxt_component_0$1$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-sm justify-content-center" }, _attrs))} data-v-9c0d3818><div class="container justify-content-end align-items-sm-center" data-v-9c0d3818><button class="navbar-toggler shadow-none border-0 mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle" data-v-9c0d3818>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "bars"],
    class: "fs-2"
  }, null, _parent));
  _push(`</button><div class="collapse navbar-collapse justify-content-center text-end" id="navbarToggle" data-v-9c0d3818><ul class="navbar-nav" data-v-9c0d3818><li class="nav-item" data-v-9c0d3818>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-9c0d3818>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/articles",
    class: "nav-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Articles `);
      } else {
        return [
          createTextVNode(" Articles ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-9c0d3818>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "nav-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Projects `);
      } else {
        return [
          createTextVNode(" Projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-9c0d3818>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About `);
      } else {
        return [
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-9c0d3818>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "nav-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact `);
      } else {
        return [
          createTextVNode(" Contact ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9c0d3818"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Navbar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="row align-items-start">`);
  _push(ssrRenderComponent(_component_Header, { class: "col-10 col-sm-12" }, null, _parent));
  _push(ssrRenderComponent(_component_Navbar, { class: "col-2 col-sm-12" }, null, _parent));
  _push(`<hr class="d-sm-none">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.37e86d2a.mjs.map
