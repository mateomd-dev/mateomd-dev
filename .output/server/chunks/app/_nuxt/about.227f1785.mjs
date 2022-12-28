import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-6f972c86><h1 data-v-6f972c86><strong data-v-6f972c86>Hey,</strong></h1><p data-v-6f972c86> I&#39;m Mateo - a Computer Science student at Swansea University and I&#39;m interested basically in anything related to technology. My passion is helping to solve difficult problems and contributing to projects that change the world. Currently, I&#39;m mainly focusing on <strong class="highlighted text-nowrap" data-v-6f972c86>Artificial Intelligence</strong> and <strong class="highlighted text-nowrap" data-v-6f972c86>Autonomous Driving</strong>. </p><h2 class="mt-4" data-v-6f972c86>Skills</h2><p data-v-6f972c86> Most of my recent work has been in <strong class="highlighted text-nowrap" data-v-6f972c86>Deep Learning</strong> and <strong class="highlighted text-no-wrap" data-v-6f972c86>Computer Vision</strong>. I also do some web development and spend too much time on my Linux setup and tinkering with old hardware. <br data-v-6f972c86> Here are a few technologies I&#39;ve worked with recently: </p><div class="row skills-list" data-v-6f972c86><div class="col-4" data-v-6f972c86><ul class="list-group" data-v-6f972c86><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Python</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`C++</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Java</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`TypeScript</li></ul></div><div class="col-4" data-v-6f972c86><ul class="list-group" data-v-6f972c86><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`PyTorch</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Open3D</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Django</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Vue/Nuxt</li></ul></div><div class="col-4" data-v-6f972c86><ul class="list-group" data-v-6f972c86><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Linux</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Bash</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`i3wm</li><li data-v-6f972c86>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "caret-right"],
    class: "pe-2"
  }, null, _parent));
  _push(`Vim</li></ul></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6f972c86"]]);

export { about as default };
//# sourceMappingURL=about.227f1785.mjs.map
