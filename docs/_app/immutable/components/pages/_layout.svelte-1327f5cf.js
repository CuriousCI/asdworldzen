import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, D as noop, h as detach, E as component_subscribe, k as element, l as claim_element, m as children, F as src_url_equal, n as attr, G as append_hydration, H as listen, I as set_store_value, J as create_slot, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, K as update_slot_base, L as get_all_dirty_from_scope, M as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-f8a70087.js";
import { i as imageViewer } from "../../chunks/stores-02afa7af.js";
const app = "";
function create_if_block(ctx) {
  let button;
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      img = element("img");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { src: true, alt: true, class: true });
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*src*/
      ctx[0]))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Bigger view");
      attr(img, "class", "max-w-screen max-h-[90%] object-contain ");
      attr(button, "class", "absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, img);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*src*/
      1 && !src_url_equal(img.src, img_src_value = /*src*/
      ctx2[0])) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let if_block_anchor;
  let if_block = (
    /*$imageViewer*/
    ctx[1].open && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (
        /*$imageViewer*/
        ctx2[1].open
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $imageViewer;
  component_subscribe($$self, imageViewer, ($$value) => $$invalidate(1, $imageViewer = $$value));
  let src = "";
  imageViewer.subscribe((imageViewer2) => $$invalidate(0, src = imageViewer2.src));
  const click_handler = () => set_store_value(imageViewer, $imageViewer.open = false, $imageViewer);
  return [src, $imageViewer, click_handler];
}
class ImageViewer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let imageviewer;
  let t;
  let div;
  let current;
  imageviewer = new ImageViewer({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      create_component(imageviewer.$$.fragment);
      t = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      claim_component(imageviewer.$$.fragment, nodes);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "h-screen h-max-screen overflow-y-auto");
    },
    m(target, anchor) {
      mount_component(imageviewer, target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(imageviewer.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(imageviewer.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(imageviewer, detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
