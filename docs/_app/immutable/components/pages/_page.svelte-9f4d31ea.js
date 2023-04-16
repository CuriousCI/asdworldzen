import { S as SvelteComponent, i as init, s as safe_not_equal, J as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, c as claim_space, h as detach, n as attr, b as insert_hydration, G as append_hydration, u as set_data, K as update_slot_base, L as get_all_dirty_from_scope, M as get_slot_changes, f as transition_in, t as transition_out, F as src_url_equal, D as noop, x as create_component, y as claim_component, z as mount_component, A as destroy_component, o as onMount, e as empty, N as destroy_each, H as listen } from "../../chunks/index-f8a70087.js";
import { v as view } from "../../chunks/stores-02afa7af.js";
function create_fragment$2(ctx) {
  let section;
  let a;
  let h2;
  let t0;
  let t1;
  let i;
  let t2;
  let t3;
  let div;
  let section_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      section = element("section");
      a = element("a");
      h2 = element("h2");
      t0 = text(
        /*title*/
        ctx[0]
      );
      t1 = space();
      i = element("i");
      t2 = text(
        /*icon*/
        ctx[1]
      );
      t3 = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      a = claim_element(section_nodes, "A", { href: true });
      var a_nodes = children(a);
      h2 = claim_element(a_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(
        h2_nodes,
        /*title*/
        ctx[0]
      );
      t1 = claim_space(h2_nodes);
      i = claim_element(h2_nodes, "I", { class: true });
      var i_nodes = children(i);
      t2 = claim_text(
        i_nodes,
        /*icon*/
        ctx[1]
      );
      i_nodes.forEach(detach);
      h2_nodes.forEach(detach);
      a_nodes.forEach(detach);
      t3 = claim_space(section_nodes);
      div = claim_element(section_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "material-symbols-outlined text-2xl sm:text-4xl md:text-5xl");
      attr(h2, "class", "text-2xl sm:text-4xl md:text-5xl mb-10 font-bold flex items-center gap-2");
      attr(
        a,
        "href",
        /*href*/
        ctx[2]
      );
      attr(div, "class", "w-full flex flex-wrap justify-center md:justify-start items-center gap-4");
      attr(section, "class", section_class_value = "w-full min-h-min p-10 " + /*background*/
      ctx[3]);
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      append_hydration(section, a);
      append_hydration(a, h2);
      append_hydration(h2, t0);
      append_hydration(h2, t1);
      append_hydration(h2, i);
      append_hydration(i, t2);
      append_hydration(section, t3);
      append_hydration(section, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*title*/
      1)
        set_data(
          t0,
          /*title*/
          ctx2[0]
        );
      if (!current || dirty & /*icon*/
      2)
        set_data(
          t2,
          /*icon*/
          ctx2[1]
        );
      if (!current || dirty & /*href*/
      4) {
        attr(
          a,
          "href",
          /*href*/
          ctx2[2]
        );
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*background*/
      8 && section_class_value !== (section_class_value = "w-full min-h-min p-10 " + /*background*/
      ctx2[3])) {
        attr(section, "class", section_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title = "", icon = "", href = "https://app.worldzen.it", background = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("icon" in $$props2)
      $$invalidate(1, icon = $$props2.icon);
    if ("href" in $$props2)
      $$invalidate(2, href = $$props2.href);
    if ("background" in $$props2)
      $$invalidate(3, background = $$props2.background);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [title, icon, href, background, $$scope, slots];
}
class Section extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, {
      title: 0,
      icon: 1,
      href: 2,
      background: 3
    });
  }
}
const Social_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let img0;
  let img0_src_value;
  let t0;
  let img1;
  let img1_src_value;
  let t1;
  let img2;
  let img2_src_value;
  let t2;
  let img3;
  let img3_src_value;
  return {
    c() {
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      img2 = element("img");
      t2 = space();
      img3 = element("img");
      this.h();
    },
    l(nodes) {
      img0 = claim_element(nodes, "IMG", { alt: true, class: true, src: true });
      t0 = claim_space(nodes);
      img1 = claim_element(nodes, "IMG", { alt: true, class: true, src: true });
      t1 = claim_space(nodes);
      img2 = claim_element(nodes, "IMG", { alt: true, class: true, src: true });
      t2 = claim_space(nodes);
      img3 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h() {
      attr(img0, "alt", "facebook world zen asd culturale taekwondo muay-thai social page martial arts");
      attr(img0, "class", "svg svelte-1abu3zw");
      if (!src_url_equal(img0.src, img0_src_value = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA2NCA2NCI+CjxwYXRoIGZpbGw9IiMwNjAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMxLDkuNWMxMi4xMzEsMCwyMiw5Ljg2OSwyMiwyMgljMCwxMS4xMTMtOC4yODQsMjAuMzIyLTE5LDIxLjc5VjM4aDRsMi01LjAyOUwzNCwzM3YtNC43M2MwLTEuMjU0LDEuMDE2LTIuMjcsMi4yNy0yLjI3YzAuOTAyLDAsMS43MywwLDEuNzMsMHYtNGgtNC4yNTUJYy0xLjUyNCwwLTIuOTg1LDAuNjA1LTQuMDYyLDEuNjgzQzI4LjYwNSwyNC43NiwyOCwyNi4yMjEsMjgsMjcuNzQ1YzAsMi42NTMsMCw1LjIyNiwwLDUuMjI2aC00VjM4aDR2MTUuMjkJQzE3LjI4NCw1MS44MjIsOSw0Mi42MTMsOSwzMS41QzksMTkuMzY5LDE4Ljg2OSw5LjUsMzEsOS41eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+Cjwvc3ZnPg=="))
        attr(img0, "src", img0_src_value);
      attr(img1, "alt", "instagram asdworldzen asd culturale taekwondo muay-thai social page martial arts");
      attr(img1, "class", "svg svelte-1abu3zw");
      if (!src_url_equal(img1.src, img1_src_value = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA2NCA2NCI+CjxwYXRoIGQ9Ik0gMzEuODIwMzEyIDEyIEMgMTMuNDM4MzEyIDEyIDEyIDEzLjQzOTMxMiAxMiAzMS44MjAzMTIgTCAxMiAzMi4xNzk2ODggQyAxMiA1MC41NjA2ODggMTMuNDM4MzEzIDUyIDMxLjgyMDMxMiA1MiBMIDMyLjE3OTY4OCA1MiBDIDUwLjU2MTY4OCA1MiA1MiA1MC41NjA2ODggNTIgMzIuMTc5Njg4IEwgNTIgMzIgQyA1MiAxMy40NTIgNTAuNTQ4IDEyIDMyIDEyIEwgMzEuODIwMzEyIDEyIHogTSA0My45OTQxNDEgMTggQyA0NS4wOTkxNDEgMTcuOTk3IDQ1Ljk5NyAxOC44ODkxNDEgNDYgMTkuOTk0MTQxIEMgNDYuMDAzIDIxLjA5OTE0MSA0NS4xMTA4NTkgMjEuOTk3IDQ0LjAwNTg1OSAyMiBDIDQyLjkwMDg1OSAyMi4wMDMgNDIuMDAzIDIxLjExMDg1OSA0MiAyMC4wMDU4NTkgQyA0MS45OTcgMTguOTAwODU5IDQyLjg4OTE0MSAxOC4wMDMgNDMuOTk0MTQxIDE4IHogTSAzMS45NzY1NjIgMjIgQyAzNy40OTg1NjIgMjEuOTg3IDQxLjk4NyAyNi40NTQ1NjMgNDIgMzEuOTc2NTYyIEMgNDIuMDEzIDM3LjQ5ODU2MiAzNy41NDU0MzcgNDEuOTg3IDMyLjAyMzQzOCA0MiBDIDI2LjUwMTQzNyA0Mi4wMTMgMjIuMDEzIDM3LjU0NTQzNyAyMiAzMi4wMjM0MzggQyAyMS45ODcgMjYuNTAxNDM3IDI2LjQ1NDU2MyAyMi4wMTMgMzEuOTc2NTYyIDIyIHogTSAzMS45ODYzMjggMjYgQyAyOC42NzIzMjggMjYuMDA4IDI1Ljk5MiAyOC43MDE2MjUgMjYgMzIuMDE1NjI1IEMgMjYuMDA4IDM1LjMyODYyNSAyOC43MDA2NzIgMzguMDA4IDMyLjAxMzY3MiAzOCBDIDM1LjMyNzY3MiAzNy45OTIgMzguMDA4IDM1LjI5OTMyOCAzOCAzMS45ODYzMjggQyAzNy45OTIgMjguNjcyMzI4IDM1LjI5OTMyOCAyNS45OTIgMzEuOTg2MzI4IDI2IHoiPjwvcGF0aD4KPC9zdmc+"))
        attr(img1, "src", img1_src_value);
      attr(img2, "alt", "youtube asdworldzen asd culturale taekwondo muay-thai social page martial arts");
      attr(img2, "class", "svg svelte-1abu3zw");
      if (!src_url_equal(img2.src, img2_src_value = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA2NCA2NCI+CjxwYXRoIGQ9Ik01My41MjcsMTcuNDI3QzU1LjcxNCwxOS42NzcsNTYsMjMuMjUyLDU2LDMycy0wLjI4NiwxMi4zMjMtMi40NzMsMTQuNTczQzUxLjM0LDQ4LjgyMiw0OS4wNjIsNDksMzIsNDkJcy0xOS4zNC0wLjE3OC0yMS41MjctMi40MjdDOC4yODYsNDQuMzIzLDgsNDAuNzQ4LDgsMzJzMC4yODYtMTIuMzIzLDIuNDczLTE0LjU3M1MxNC45MzgsMTUsMzIsMTVTNTEuMzQsMTUuMTc4LDUzLjUyNywxNy40Mjd6IE0yNy45NSwzOS40MTdsMTIuMTQ2LTcuMDM4TDI3Ljk1LDI1LjQ1MVYzOS40MTd6Ij48L3BhdGg+Cjwvc3ZnPg=="))
        attr(img2, "src", img2_src_value);
      if (!src_url_equal(img3.src, img3_src_value = "favicon.png"))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "World Zen Taekwondo ASD Icon");
      attr(img3, "class", "svelte-1abu3zw");
    },
    m(target, anchor) {
      insert_hydration(target, img0, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, img1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, img2, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, img3, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(img0);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(img1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(img2);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(img3);
    }
  };
}
class Social extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let button;
  let img;
  let img_src_value;
  let t;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[1](
        /*image*/
        ctx[2]
      )
    );
  }
  return {
    c() {
      button = element("button");
      img = element("img");
      t = space();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", {
        src: true,
        alt: true,
        class: true,
        loading: true
      });
      t = claim_space(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*image*/
      ctx[2]))
        attr(img, "src", img_src_value);
      attr(img, "alt", "World Zen " + /*image*/
      ctx[2] + " Taekwon-Do Muay-Thai");
      attr(img, "class", "max-h-screen md:max-h-[30vh] svelte-8fii8a");
      attr(img, "loading", "lazy");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, img);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_3(ctx) {
  let each_1_anchor;
  let each_value = (
    /*gallery*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*view, gallery*/
      1) {
        each_value = /*gallery*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_2(ctx) {
  let div4;
  let div1;
  let h20;
  let t0;
  let t1;
  let div0;
  let p0;
  let b0;
  let t2;
  let i0;
  let t3;
  let t4;
  let t5;
  let a0;
  let p1;
  let t6;
  let t7;
  let p2;
  let t8;
  let t9;
  let p3;
  let t10;
  let t11;
  let div2;
  let span0;
  let p4;
  let t12;
  let i1;
  let t13;
  let t14;
  let t15;
  let a1;
  let p5;
  let t16;
  let t17;
  let p6;
  let t18;
  let t19;
  let p7;
  let t20;
  let t21;
  let div3;
  let h21;
  let t22;
  let t23;
  let h3;
  let t24;
  let t25;
  let span1;
  let p8;
  let b1;
  let t26;
  let i2;
  let t27;
  let t28;
  let t29;
  let a2;
  let p9;
  let t30;
  let t31;
  let p10;
  let t32;
  let t33;
  let p11;
  let t34;
  return {
    c() {
      div4 = element("div");
      div1 = element("div");
      h20 = element("h2");
      t0 = text("Taekwon-Do");
      t1 = space();
      div0 = element("div");
      p0 = element("p");
      b0 = element("b");
      t2 = text("Sabum ");
      i0 = element("i");
      t3 = text("V. Marcelo ");
      t4 = text(":");
      t5 = space();
      a0 = element("a");
      p1 = element("p");
      t6 = text("3932214993");
      t7 = space();
      p2 = element("p");
      t8 = text("Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      t9 = space();
      p3 = element("p");
      t10 = text("Lunedì e mercoledì 19:30-22:00");
      t11 = space();
      div2 = element("div");
      span0 = element("span");
      p4 = element("p");
      t12 = text("Bosabum ");
      i1 = element("i");
      t13 = text("C. Bryan ");
      t14 = text(":");
      t15 = space();
      a1 = element("a");
      p5 = element("p");
      t16 = text("3487474257");
      t17 = space();
      p6 = element("p");
      t18 = text("Presso ASD Bad Boys, via Aldo Moro 39, Ladispoli");
      t19 = space();
      p7 = element("p");
      t20 = text("Martedì e giovedì 17:30-19:00");
      t21 = space();
      div3 = element("div");
      h21 = element("h2");
      t22 = text("Muay-Thai");
      t23 = space();
      h3 = element("h3");
      t24 = text("M.13.K. Ṣ̄ilpa k̄hæn s̄ib s̄ām");
      t25 = space();
      span1 = element("span");
      p8 = element("p");
      b1 = element("b");
      t26 = text("Kru ");
      i2 = element("i");
      t27 = text("C. Bryan ");
      t28 = text(":");
      t29 = space();
      a2 = element("a");
      p9 = element("p");
      t30 = text("3487474257");
      t31 = space();
      p10 = element("p");
      t32 = text("Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      t33 = space();
      p11 = element("p");
      t34 = text("Lunedì e mercoledì 18:30-19:30");
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {});
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t0 = claim_text(h20_nodes, "Taekwon-Do");
      h20_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t2 = claim_text(b0_nodes, "Sabum ");
      i0 = claim_element(b0_nodes, "I", {});
      var i0_nodes = children(i0);
      t3 = claim_text(i0_nodes, "V. Marcelo ");
      i0_nodes.forEach(detach);
      b0_nodes.forEach(detach);
      t4 = claim_text(p0_nodes, ":");
      p0_nodes.forEach(detach);
      t5 = claim_space(div0_nodes);
      a0 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      p1 = claim_element(a0_nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "3932214993");
      p1_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t7 = claim_space(div1_nodes);
      p2 = claim_element(div1_nodes, "P", { class: true });
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      p2_nodes.forEach(detach);
      t9 = claim_space(div1_nodes);
      p3 = claim_element(div1_nodes, "P", { class: true });
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes, "Lunedì e mercoledì 19:30-22:00");
      p3_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t11 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {});
      var div2_nodes = children(div2);
      span0 = claim_element(div2_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      p4 = claim_element(span0_nodes, "P", { class: true });
      var p4_nodes = children(p4);
      t12 = claim_text(p4_nodes, "Bosabum ");
      i1 = claim_element(p4_nodes, "I", {});
      var i1_nodes = children(i1);
      t13 = claim_text(i1_nodes, "C. Bryan ");
      i1_nodes.forEach(detach);
      t14 = claim_text(p4_nodes, ":");
      p4_nodes.forEach(detach);
      t15 = claim_space(span0_nodes);
      a1 = claim_element(span0_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      p5 = claim_element(a1_nodes, "P", {});
      var p5_nodes = children(p5);
      t16 = claim_text(p5_nodes, "3487474257");
      p5_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      span0_nodes.forEach(detach);
      t17 = claim_space(div2_nodes);
      p6 = claim_element(div2_nodes, "P", { class: true });
      var p6_nodes = children(p6);
      t18 = claim_text(p6_nodes, "Presso ASD Bad Boys, via Aldo Moro 39, Ladispoli");
      p6_nodes.forEach(detach);
      t19 = claim_space(div2_nodes);
      p7 = claim_element(div2_nodes, "P", { class: true });
      var p7_nodes = children(p7);
      t20 = claim_text(p7_nodes, "Martedì e giovedì 17:30-19:00");
      p7_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t21 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {});
      var div3_nodes = children(div3);
      h21 = claim_element(div3_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t22 = claim_text(h21_nodes, "Muay-Thai");
      h21_nodes.forEach(detach);
      t23 = claim_space(div3_nodes);
      h3 = claim_element(div3_nodes, "H3", {});
      var h3_nodes = children(h3);
      t24 = claim_text(h3_nodes, "M.13.K. Ṣ̄ilpa k̄hæn s̄ib s̄ām");
      h3_nodes.forEach(detach);
      t25 = claim_space(div3_nodes);
      span1 = claim_element(div3_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      p8 = claim_element(span1_nodes, "P", {});
      var p8_nodes = children(p8);
      b1 = claim_element(p8_nodes, "B", {});
      var b1_nodes = children(b1);
      t26 = claim_text(b1_nodes, "Kru ");
      i2 = claim_element(b1_nodes, "I", {});
      var i2_nodes = children(i2);
      t27 = claim_text(i2_nodes, "C. Bryan ");
      i2_nodes.forEach(detach);
      t28 = claim_text(b1_nodes, ":");
      b1_nodes.forEach(detach);
      p8_nodes.forEach(detach);
      t29 = claim_space(span1_nodes);
      a2 = claim_element(span1_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      p9 = claim_element(a2_nodes, "P", {});
      var p9_nodes = children(p9);
      t30 = claim_text(p9_nodes, "3487474257");
      p9_nodes.forEach(detach);
      a2_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      t31 = claim_space(div3_nodes);
      p10 = claim_element(div3_nodes, "P", { class: true });
      var p10_nodes = children(p10);
      t32 = claim_text(p10_nodes, "Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      p10_nodes.forEach(detach);
      t33 = claim_space(div3_nodes);
      p11 = claim_element(div3_nodes, "P", { class: true });
      var p11_nodes = children(p11);
      t34 = claim_text(p11_nodes, "Lunedì e mercoledì 18:30-19:30");
      p11_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h20, "class", "text-amber-300");
      attr(a0, "href", "tel:3932214993");
      attr(a0, "class", "svelte-8fii8a");
      attr(div0, "class", "flex gap-2");
      attr(p2, "class", "text-gray-300");
      attr(p3, "class", "font-bold italic underline text-amber-200");
      attr(p4, "class", "font-bold");
      attr(a1, "href", "tel:3487474257");
      attr(a1, "class", "svelte-8fii8a");
      attr(span0, "class", "flex gap-2");
      attr(p6, "class", "text-gray-300");
      attr(p7, "class", "font-bold italic underline text-amber-200");
      attr(h21, "class", "text-amber-300");
      attr(a2, "href", "tel:3487474257");
      attr(a2, "class", "svelte-8fii8a");
      attr(span1, "class", "flex gap-2");
      attr(p10, "class", "text-gray-300");
      attr(p11, "class", "font-bold italic underline text-amber-200");
      attr(div4, "class", "flex flex-col gap-4");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div1);
      append_hydration(div1, h20);
      append_hydration(h20, t0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, p0);
      append_hydration(p0, b0);
      append_hydration(b0, t2);
      append_hydration(b0, i0);
      append_hydration(i0, t3);
      append_hydration(p0, t4);
      append_hydration(div0, t5);
      append_hydration(div0, a0);
      append_hydration(a0, p1);
      append_hydration(p1, t6);
      append_hydration(div1, t7);
      append_hydration(div1, p2);
      append_hydration(p2, t8);
      append_hydration(div1, t9);
      append_hydration(div1, p3);
      append_hydration(p3, t10);
      append_hydration(div4, t11);
      append_hydration(div4, div2);
      append_hydration(div2, span0);
      append_hydration(span0, p4);
      append_hydration(p4, t12);
      append_hydration(p4, i1);
      append_hydration(i1, t13);
      append_hydration(p4, t14);
      append_hydration(span0, t15);
      append_hydration(span0, a1);
      append_hydration(a1, p5);
      append_hydration(p5, t16);
      append_hydration(div2, t17);
      append_hydration(div2, p6);
      append_hydration(p6, t18);
      append_hydration(div2, t19);
      append_hydration(div2, p7);
      append_hydration(p7, t20);
      append_hydration(div4, t21);
      append_hydration(div4, div3);
      append_hydration(div3, h21);
      append_hydration(h21, t22);
      append_hydration(div3, t23);
      append_hydration(div3, h3);
      append_hydration(h3, t24);
      append_hydration(div3, t25);
      append_hydration(div3, span1);
      append_hydration(span1, p8);
      append_hydration(p8, b1);
      append_hydration(b1, t26);
      append_hydration(b1, i2);
      append_hydration(i2, t27);
      append_hydration(b1, t28);
      append_hydration(span1, t29);
      append_hydration(span1, a2);
      append_hydration(a2, p9);
      append_hydration(p9, t30);
      append_hydration(div3, t31);
      append_hydration(div3, p10);
      append_hydration(p10, t32);
      append_hydration(div3, t33);
      append_hydration(div3, p11);
      append_hydration(p11, t34);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
    }
  };
}
function create_default_slot_1(ctx) {
  let iframe0;
  let iframe0_src_value;
  let t;
  let iframe1;
  let iframe1_src_value;
  return {
    c() {
      iframe0 = element("iframe");
      t = space();
      iframe1 = element("iframe");
      this.h();
    },
    l(nodes) {
      iframe0 = claim_element(nodes, "IFRAME", {
        src: true,
        class: true,
        loading: true,
        referrerpolicy: true,
        title: true
      });
      children(iframe0).forEach(detach);
      t = claim_space(nodes);
      iframe1 = claim_element(nodes, "IFRAME", {
        src: true,
        class: true,
        loading: true,
        referrerpolicy: true,
        title: true
      });
      children(iframe1).forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(iframe0.src, iframe0_src_value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.8276627044584!2d12.093015358279207!3d41.9862094885059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f55f7f522e8f1%3A0xad7e3e210563e7b5!2sASD%20World%20Zen!5e0!3m2!1sen!2sit!4v1676199409781!5m2!1sen!2sit"))
        attr(iframe0, "src", iframe0_src_value);
      attr(iframe0, "class", "w-full md:w-[48%] h-[50vh] border-0 svelte-8fii8a");
      attr(iframe0, "loading", "lazy");
      attr(iframe0, "referrerpolicy", "no-referrer-when-downgrade");
      attr(iframe0, "title", "World Zen Cerveteri");
      if (!src_url_equal(iframe1.src, iframe1_src_value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.6080530014383!2d12.074612215801183!3d41.96575306790258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f557ac78afc8b%3A0x3fb0019c18fedb81!2sASD%20Bad%20Boys!5e0!3m2!1sen!2sit!4v1676199434829!5m2!1sen!2sit"))
        attr(iframe1, "src", iframe1_src_value);
      attr(iframe1, "class", "w-full md:w-[48%] h-[50vh] border-0 svelte-8fii8a");
      attr(iframe1, "loading", "lazy");
      attr(iframe1, "referrerpolicy", "no-referrer-when-downgrade");
      attr(iframe1, "title", "World Zen Ladispoli");
    },
    m(target, anchor) {
      insert_hydration(target, iframe0, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, iframe1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(iframe0);
      if (detaching)
        detach(t);
      if (detaching)
        detach(iframe1);
    }
  };
}
function create_default_slot(ctx) {
  let img0;
  let img0_src_value;
  let t;
  let img1;
  let img1_src_value;
  return {
    c() {
      img0 = element("img");
      t = space();
      img1 = element("img");
      this.h();
    },
    l(nodes) {
      img0 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t = claim_space(nodes);
      img1 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = "app-1.webp"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "App 1");
      attr(img0, "class", "h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img1.src, img1_src_value = "app-2.webp"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "App 2");
      attr(img1, "class", "h-[70vh] svelte-8fii8a");
    },
    m(target, anchor) {
      insert_hydration(target, img0, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, img1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(img0);
      if (detaching)
        detach(t);
      if (detaching)
        detach(img1);
    }
  };
}
function create_fragment(ctx) {
  let main;
  let video;
  let source0;
  let source0_src_value;
  let source1;
  let source1_src_value;
  let track;
  let track_src_value;
  let t0;
  let div3;
  let div2;
  let a0;
  let img;
  let img_src_value;
  let t1;
  let div1;
  let div0;
  let social;
  let t2;
  let a1;
  let t3;
  let t4;
  let section0;
  let t5;
  let section1;
  let t6;
  let section2;
  let t7;
  let section3;
  let current;
  social = new Social({});
  section0 = new Section({
    props: {
      title: "Galleria",
      icon: "sports_martial_arts",
      background: "bg-gradient-to-tr from-black to-red-900",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  section1 = new Section({
    props: {
      title: "Contatti",
      icon: "call",
      background: "bg-gradient-to-br from-black to-red-900",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  section2 = new Section({
    props: {
      title: "Dove trovarci?",
      icon: "pin_drop",
      background: "bg-gradient-to-tr from-black to-red-900",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  section3 = new Section({
    props: {
      title: "Martial Arts App",
      icon: "download",
      href: "https://app.worldzen.it",
      background: "bg-gradient-to-br from-black to-red-900",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      main = element("main");
      video = element("video");
      source0 = element("source");
      source1 = element("source");
      track = element("track");
      t0 = space();
      div3 = element("div");
      div2 = element("div");
      a0 = element("a");
      img = element("img");
      t1 = space();
      div1 = element("div");
      div0 = element("div");
      create_component(social.$$.fragment);
      t2 = space();
      a1 = element("a");
      t3 = text("3932214993");
      t4 = space();
      create_component(section0.$$.fragment);
      t5 = space();
      create_component(section1.$$.fragment);
      t6 = space();
      create_component(section2.$$.fragment);
      t7 = space();
      create_component(section3.$$.fragment);
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      video = claim_element(main_nodes, "VIDEO", { preload: true, id: true, class: true });
      var video_nodes = children(video);
      source0 = claim_element(video_nodes, "SOURCE", { src: true, type: true });
      source1 = claim_element(video_nodes, "SOURCE", { src: true, type: true });
      track = claim_element(video_nodes, "TRACK", {
        src: true,
        kind: true,
        srclang: true,
        label: true
      });
      video_nodes.forEach(detach);
      t0 = claim_space(main_nodes);
      div3 = claim_element(main_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
      a0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(social.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "3932214993");
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t4 = claim_space(nodes);
      claim_component(section0.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(section2.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(section3.$$.fragment, nodes);
      this.h();
    },
    h() {
      if (!src_url_equal(source0.src, source0_src_value = "/asd-world-zen-youtube-canale-sport-taekwondo-muay-thai-combattimento-potenza-velocita-agilita.mp4"))
        attr(source0, "src", source0_src_value);
      attr(source0, "type", "video/mp4");
      if (!src_url_equal(source1.src, source1_src_value = "/asd-world-zen-youtube-canale-sport-taekwondo-muay-thai-combattimento-potenza-velocita-agilita.webm"))
        attr(source1, "src", source1_src_value);
      attr(source1, "type", "video/webm");
      if (!src_url_equal(track.src, track_src_value = "captions_en.vtt"))
        attr(track, "src", track_src_value);
      attr(track, "kind", "captions");
      attr(track, "srclang", "en");
      attr(track, "label", "english_captions");
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      attr(video, "preload", "none");
      attr(video, "id", "background");
      attr(video, "class", "w-full h-full svelte-8fii8a");
      video.playsInline = true;
      if (!src_url_equal(img.src, img_src_value = "world-zen-asd-culturale-sport-taekwondo-muay-thai-titolo-logo-nome.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "World Zen");
      attr(img, "class", "svelte-8fii8a");
      attr(a0, "href", "https://app.worldzen.it");
      attr(a0, "class", "svelte-8fii8a");
      attr(div0, "class", "flex items-center gap-2 sm:gap-5");
      attr(a1, "href", "tel:+393932214993");
      attr(a1, "class", "text-5xl sm:text-6xl md:text-6xl font-extrabold svelte-8fii8a");
      attr(div1, "class", "w-full flex justify-center gap-4 items-center flex-wrap");
      attr(div2, "class", "p-10");
      attr(div3, "class", "absolute top-0 w-full h-full grid place-items-center bg-gradient-to-b from-black/60 to-black/80");
      attr(main, "class", "relative w-full h-screen bg-black");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, video);
      append_hydration(video, source0);
      append_hydration(video, source1);
      append_hydration(video, track);
      append_hydration(main, t0);
      append_hydration(main, div3);
      append_hydration(div3, div2);
      append_hydration(div2, a0);
      append_hydration(a0, img);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      mount_component(social, div0, null);
      append_hydration(div1, t2);
      append_hydration(div1, a1);
      append_hydration(a1, t3);
      insert_hydration(target, t4, anchor);
      mount_component(section0, target, anchor);
      insert_hydration(target, t5, anchor);
      mount_component(section1, target, anchor);
      insert_hydration(target, t6, anchor);
      mount_component(section2, target, anchor);
      insert_hydration(target, t7, anchor);
      mount_component(section3, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const section0_changes = {};
      if (dirty & /*$$scope*/
      32) {
        section0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section0.$set(section0_changes);
      const section1_changes = {};
      if (dirty & /*$$scope*/
      32) {
        section1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section1.$set(section1_changes);
      const section2_changes = {};
      if (dirty & /*$$scope*/
      32) {
        section2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section2.$set(section2_changes);
      const section3_changes = {};
      if (dirty & /*$$scope*/
      32) {
        section3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section3.$set(section3_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(social.$$.fragment, local);
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      transition_in(section2.$$.fragment, local);
      transition_in(section3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(social.$$.fragment, local);
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      transition_out(section2.$$.fragment, local);
      transition_out(section3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      destroy_component(social);
      if (detaching)
        detach(t4);
      destroy_component(section0, detaching);
      if (detaching)
        detach(t5);
      destroy_component(section1, detaching);
      if (detaching)
        detach(t6);
      destroy_component(section2, detaching);
      if (detaching)
        detach(t7);
      destroy_component(section3, detaching);
    }
  };
}
function instance($$self) {
  const gallery = [
    "muay-thai-lethwei-palestra-piazza-grande-ladispoli-stage-aperto-kru-instagram-world-zen-italian-lethwei-academy.jpg",
    "taekwondo-corsi-cerveteri-ladispoli-world-zen-muay-thai-asd-badboys-mattei-kickboxing-k1-sanda-combattimento-difesa-personale.jpg",
    "taekwondo-asd-badboys-ladispoli-world-zen-itf.jpg",
    "muay-thai-m13k-cerveteri-mattei-world-zen.jpg"
  ];
  onMount(() => {
  });
  const click_handler = (image) => {
    view(image);
  };
  return [gallery, click_handler];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
