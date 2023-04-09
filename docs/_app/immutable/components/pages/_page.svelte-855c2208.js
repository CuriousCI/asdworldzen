import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, c as claim_space, h as detach, n as attr, b as insert_hydration, H as append_hydration, u as set_data, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, f as transition_in, t as transition_out, x as create_component, y as claim_component, J as src_url_equal, K as set_custom_element_data, z as mount_component, L as destroy_each, A as destroy_component, C as noop, p as set_style } from "../../chunks/index-4e8a7cd9.js";
function create_fragment$1(ctx) {
  let section;
  let a;
  let h1;
  let t0;
  let t1;
  let span;
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
      h1 = element("h1");
      t0 = text(
        /*title*/
        ctx[0]
      );
      t1 = space();
      span = element("span");
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
      a = claim_element(section_nodes, "A", { href: true, id: true });
      var a_nodes = children(a);
      h1 = claim_element(a_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(
        h1_nodes,
        /*title*/
        ctx[0]
      );
      t1 = claim_space(h1_nodes);
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(
        span_nodes,
        /*icon*/
        ctx[1]
      );
      span_nodes.forEach(detach);
      h1_nodes.forEach(detach);
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
      attr(span, "class", "material-symbols-outlined text-5xl relative top-2");
      attr(h1, "class", "text-5xl mb-10 font-bold");
      attr(
        a,
        "href",
        /*href*/
        ctx[2]
      );
      attr(a, "id", "title");
      attr(div, "class", "w-full flex flex-wrap justify-center md:justify-start items-center gap-4");
      attr(section, "class", section_class_value = "w-full min-h-min p-10 " + /*background*/
      ctx[3]);
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      append_hydration(section, a);
      append_hydration(a, h1);
      append_hydration(h1, t0);
      append_hydration(h1, t1);
      append_hydration(h1, span);
      append_hydration(span, t2);
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
  let { title = "", icon = "", href = "", background = "" } = $$props;
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
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      title: 0,
      icon: 1,
      href: 2,
      background: 3
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i].alt;
  child_ctx[2] = list[i].href;
  child_ctx[3] = list[i].src;
  return child_ctx;
}
function create_each_block(ctx) {
  let a;
  let img;
  let img_src_value;
  let t;
  return {
    c() {
      a = element("a");
      img = element("img");
      t = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
      t = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*src*/
      ctx[3]))
        attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*alt*/
        ctx[1]
      );
      attr(img, "class", "h-8 sm:h-14 md:h-20 drop-shadow-2xl svelte-8fii8a");
      attr(
        a,
        "href",
        /*href*/
        ctx[2]
      );
      attr(a, "target", "_blank");
      attr(a, "rel", "noreferrer");
      attr(a, "class", "svelte-8fii8a");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, img);
      append_hydration(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_default_slot_3(ctx) {
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
      img0 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t0 = claim_space(nodes);
      img1 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t1 = claim_space(nodes);
      img2 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t2 = claim_space(nodes);
      img3 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = "muay-thai-lethwei.webp"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "World Zen");
      attr(img0, "class", "max-h-screen md:max-h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img1.src, img1_src_value = "worldzen.webp"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "World Zen");
      attr(img1, "class", "max-h-screen md:max-h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img2.src, img2_src_value = "m13k.webp"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "M13K");
      attr(img2, "class", "max-h-screen md:max-h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img3.src, img3_src_value = "insta.webp"))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "Instagram");
      attr(img3, "class", "max-h-screen md:max-h-[70vh] svelte-8fii8a");
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
function create_default_slot_2(ctx) {
  let div;
  let h10;
  let t0;
  let t1;
  let span0;
  let h20;
  let t2;
  let i0;
  let t3;
  let t4;
  let t5;
  let a0;
  let t6;
  let t7;
  let span1;
  let t8;
  let t9;
  let span2;
  let t10;
  let t11;
  let span3;
  let h21;
  let t12;
  let i1;
  let t13;
  let t14;
  let t15;
  let a1;
  let t16;
  let t17;
  let span4;
  let t18;
  let t19;
  let span5;
  let t20;
  let t21;
  let h11;
  let t22;
  let t23;
  let h22;
  let t24;
  let t25;
  let h23;
  let t26;
  let i2;
  let t27;
  let t28;
  let t29;
  let span6;
  let t30;
  let t31;
  let span7;
  let t32;
  return {
    c() {
      div = element("div");
      h10 = element("h1");
      t0 = text("Taekwon-Do");
      t1 = space();
      span0 = element("span");
      h20 = element("h2");
      t2 = text("Sabum ");
      i0 = element("i");
      t3 = text("Marcelo Valente ");
      t4 = text(":");
      t5 = space();
      a0 = element("a");
      t6 = text("3932214993");
      t7 = space();
      span1 = element("span");
      t8 = text("Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      t9 = space();
      span2 = element("span");
      t10 = text("Lunedì e mercoledì 19:30-22:00");
      t11 = space();
      span3 = element("span");
      h21 = element("h2");
      t12 = text("Bosabum ");
      i1 = element("i");
      t13 = text("Bryan Carfagna ");
      t14 = text(":");
      t15 = space();
      a1 = element("a");
      t16 = text("3487474257");
      t17 = space();
      span4 = element("span");
      t18 = text("Presso ASD Bad Boys, via Aldo Moro 39, Ladispoli");
      t19 = space();
      span5 = element("span");
      t20 = text("Martedì e giovedì 17:30-19:00");
      t21 = space();
      h11 = element("h1");
      t22 = text("Muay-Thai");
      t23 = space();
      h22 = element("h2");
      t24 = text("M.13.K. Ṣ̄ilpa k̄hæn s̄ib s̄ām");
      t25 = space();
      h23 = element("h2");
      t26 = text("Kru");
      i2 = element("i");
      t27 = text("Bryan Carfagna ");
      t28 = text(":");
      t29 = space();
      span6 = element("span");
      t30 = text("Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      t31 = space();
      span7 = element("span");
      t32 = text("Lunedì e mercoledì 18:30-19:30");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h10 = claim_element(div_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      t0 = claim_text(h10_nodes, "Taekwon-Do");
      h10_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      span0 = claim_element(div_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      h20 = claim_element(span0_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t2 = claim_text(h20_nodes, "Sabum ");
      i0 = claim_element(h20_nodes, "I", {});
      var i0_nodes = children(i0);
      t3 = claim_text(i0_nodes, "Marcelo Valente ");
      i0_nodes.forEach(detach);
      t4 = claim_text(h20_nodes, ":");
      h20_nodes.forEach(detach);
      t5 = claim_space(span0_nodes);
      a0 = claim_element(span0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "3932214993");
      a0_nodes.forEach(detach);
      span0_nodes.forEach(detach);
      t7 = claim_space(div_nodes);
      span1 = claim_element(div_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t8 = claim_text(span1_nodes, "Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      span1_nodes.forEach(detach);
      t9 = claim_space(div_nodes);
      span2 = claim_element(div_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t10 = claim_text(span2_nodes, "Lunedì e mercoledì 19:30-22:00");
      span2_nodes.forEach(detach);
      t11 = claim_space(div_nodes);
      span3 = claim_element(div_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      h21 = claim_element(span3_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t12 = claim_text(h21_nodes, "Bosabum ");
      i1 = claim_element(h21_nodes, "I", {});
      var i1_nodes = children(i1);
      t13 = claim_text(i1_nodes, "Bryan Carfagna ");
      i1_nodes.forEach(detach);
      t14 = claim_text(h21_nodes, ":");
      h21_nodes.forEach(detach);
      t15 = claim_space(span3_nodes);
      a1 = claim_element(span3_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t16 = claim_text(a1_nodes, "3487474257");
      a1_nodes.forEach(detach);
      span3_nodes.forEach(detach);
      t17 = claim_space(div_nodes);
      span4 = claim_element(div_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      t18 = claim_text(span4_nodes, "Presso ASD Bad Boys, via Aldo Moro 39, Ladispoli");
      span4_nodes.forEach(detach);
      t19 = claim_space(div_nodes);
      span5 = claim_element(div_nodes, "SPAN", { class: true });
      var span5_nodes = children(span5);
      t20 = claim_text(span5_nodes, "Martedì e giovedì 17:30-19:00");
      span5_nodes.forEach(detach);
      t21 = claim_space(div_nodes);
      h11 = claim_element(div_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t22 = claim_text(h11_nodes, "Muay-Thai");
      h11_nodes.forEach(detach);
      t23 = claim_space(div_nodes);
      h22 = claim_element(div_nodes, "H2", { class: true });
      var h22_nodes = children(h22);
      t24 = claim_text(h22_nodes, "M.13.K. Ṣ̄ilpa k̄hæn s̄ib s̄ām");
      h22_nodes.forEach(detach);
      t25 = claim_space(div_nodes);
      h23 = claim_element(div_nodes, "H2", { class: true });
      var h23_nodes = children(h23);
      t26 = claim_text(h23_nodes, "Kru");
      i2 = claim_element(h23_nodes, "I", {});
      var i2_nodes = children(i2);
      t27 = claim_text(i2_nodes, "Bryan Carfagna ");
      i2_nodes.forEach(detach);
      t28 = claim_text(h23_nodes, ":");
      h23_nodes.forEach(detach);
      t29 = claim_space(div_nodes);
      span6 = claim_element(div_nodes, "SPAN", { class: true });
      var span6_nodes = children(span6);
      t30 = claim_text(span6_nodes, "Presso ISIS Enrico Mattei, via Paolo Borsellino 3, Cerveteri");
      span6_nodes.forEach(detach);
      t31 = claim_space(div_nodes);
      span7 = claim_element(div_nodes, "SPAN", { class: true });
      var span7_nodes = children(span7);
      t32 = claim_text(span7_nodes, "Lunedì e mercoledì 18:30-19:30");
      span7_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h10, "class", "text-4xl font-bold mb-3");
      attr(h20, "class", "text-3xl font-bold");
      attr(a0, "href", "tel:3932214993");
      attr(a0, "class", "svelte-8fii8a");
      attr(span0, "class", "flex gap-2 text-3xl");
      attr(span1, "class", "text-2xl");
      attr(span2, "class", "text-2xl mb-2");
      attr(h21, "class", "text-3xl font-bold");
      attr(a1, "href", "tel:3487474257");
      attr(a1, "class", "svelte-8fii8a");
      attr(span3, "class", "flex gap-2 text-3xl");
      attr(span4, "class", "text-2xl");
      attr(span5, "class", "text-2xl mb-6");
      attr(h11, "class", "text-4xl font-bold mb-2");
      attr(h22, "class", "text-3xl mb-2");
      attr(h23, "class", "text-3xl font-bold");
      attr(span6, "class", "text-2xl");
      attr(span7, "class", "text-2xl");
      attr(div, "class", "flex flex-col");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h10);
      append_hydration(h10, t0);
      append_hydration(div, t1);
      append_hydration(div, span0);
      append_hydration(span0, h20);
      append_hydration(h20, t2);
      append_hydration(h20, i0);
      append_hydration(i0, t3);
      append_hydration(h20, t4);
      append_hydration(span0, t5);
      append_hydration(span0, a0);
      append_hydration(a0, t6);
      append_hydration(div, t7);
      append_hydration(div, span1);
      append_hydration(span1, t8);
      append_hydration(div, t9);
      append_hydration(div, span2);
      append_hydration(span2, t10);
      append_hydration(div, t11);
      append_hydration(div, span3);
      append_hydration(span3, h21);
      append_hydration(h21, t12);
      append_hydration(h21, i1);
      append_hydration(i1, t13);
      append_hydration(h21, t14);
      append_hydration(span3, t15);
      append_hydration(span3, a1);
      append_hydration(a1, t16);
      append_hydration(div, t17);
      append_hydration(div, span4);
      append_hydration(span4, t18);
      append_hydration(div, t19);
      append_hydration(div, span5);
      append_hydration(span5, t20);
      append_hydration(div, t21);
      append_hydration(div, h11);
      append_hydration(h11, t22);
      append_hydration(div, t23);
      append_hydration(div, h22);
      append_hydration(h22, t24);
      append_hydration(div, t25);
      append_hydration(div, h23);
      append_hydration(h23, t26);
      append_hydration(h23, i2);
      append_hydration(i2, t27);
      append_hydration(h23, t28);
      append_hydration(div, t29);
      append_hydration(div, span6);
      append_hydration(span6, t30);
      append_hydration(div, t31);
      append_hydration(div, span7);
      append_hydration(span7, t32);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
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
        style: true,
        loading: true,
        referrerpolicy: true,
        title: true
      });
      children(iframe0).forEach(detach);
      t = claim_space(nodes);
      iframe1 = claim_element(nodes, "IFRAME", {
        src: true,
        class: true,
        style: true,
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
      attr(iframe0, "class", "w-full md:w-[48%] h-[50vh] svelte-8fii8a");
      set_style(iframe0, "border", "0");
      attr(iframe0, "loading", "lazy");
      attr(iframe0, "referrerpolicy", "no-referrer-when-downgrade");
      attr(iframe0, "title", "World Zen Cerveteri");
      if (!src_url_equal(iframe1.src, iframe1_src_value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.6080530014383!2d12.074612215801183!3d41.96575306790258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f557ac78afc8b%3A0x3fb0019c18fedb81!2sASD%20Bad%20Boys!5e0!3m2!1sen!2sit!4v1676199434829!5m2!1sen!2sit"))
        attr(iframe1, "src", iframe1_src_value);
      attr(iframe1, "class", "w-full md:w-[48%] h-[50vh] svelte-8fii8a");
      set_style(iframe1, "border", "0");
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
  let t0;
  let img1;
  let img1_src_value;
  let t1;
  let amp_ad;
  let div;
  return {
    c() {
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      amp_ad = element("amp-ad");
      div = element("div");
      this.h();
    },
    l(nodes) {
      img0 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t0 = claim_space(nodes);
      img1 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t1 = claim_space(nodes);
      amp_ad = claim_element(nodes, "AMP-AD", {
        width: true,
        height: true,
        type: true,
        "data-ad-client": true,
        "data-ad-slot": true,
        "data-auto-format": true,
        "data-full-width": true
      });
      var amp_ad_nodes = children(amp_ad);
      div = claim_element(amp_ad_nodes, "DIV", { overflow: true });
      children(div).forEach(detach);
      amp_ad_nodes.forEach(detach);
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
      attr(div, "overflow", "");
      set_custom_element_data(amp_ad, "width", "100vw");
      set_custom_element_data(amp_ad, "height", "320");
      set_custom_element_data(amp_ad, "type", "adsense");
      set_custom_element_data(amp_ad, "data-ad-client", "ca-pub-9406040528414499");
      set_custom_element_data(amp_ad, "data-ad-slot", "5257041353");
      set_custom_element_data(amp_ad, "data-auto-format", "rspv");
      set_custom_element_data(amp_ad, "data-full-width", "");
    },
    m(target, anchor) {
      insert_hydration(target, img0, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, img1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, amp_ad, anchor);
      append_hydration(amp_ad, div);
    },
    p: noop,
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
        detach(amp_ad);
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
  let t0;
  let div3;
  let div2;
  let a0;
  let img;
  let img_src_value;
  let t1;
  let div1;
  let div0;
  let t2;
  let a1;
  let t3;
  let t4;
  let section0;
  let t5;
  let section1;
  let t6;
  let amp_ad;
  let div4;
  let t7;
  let section2;
  let t8;
  let section3;
  let current;
  let each_value = (
    /*social*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  section0 = new Section({
    props: {
      title: "Corsi",
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
      t0 = space();
      div3 = element("div");
      div2 = element("div");
      a0 = element("a");
      img = element("img");
      t1 = space();
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      a1 = element("a");
      t3 = text("3932214993");
      t4 = space();
      create_component(section0.$$.fragment);
      t5 = space();
      create_component(section1.$$.fragment);
      t6 = space();
      amp_ad = element("amp-ad");
      div4 = element("div");
      t7 = space();
      create_component(section2.$$.fragment);
      t8 = space();
      create_component(section3.$$.fragment);
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      video = claim_element(main_nodes, "VIDEO", { id: true, class: true });
      var video_nodes = children(video);
      source0 = claim_element(video_nodes, "SOURCE", { src: true, type: true });
      source1 = claim_element(video_nodes, "SOURCE", { src: true, type: true });
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
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
      amp_ad = claim_element(nodes, "AMP-AD", {
        width: true,
        height: true,
        type: true,
        "data-ad-client": true,
        "data-ad-slot": true,
        "data-auto-format": true,
        "data-full-width": true
      });
      var amp_ad_nodes = children(amp_ad);
      div4 = claim_element(amp_ad_nodes, "DIV", { overflow: true });
      children(div4).forEach(detach);
      amp_ad_nodes.forEach(detach);
      t7 = claim_space(nodes);
      claim_component(section2.$$.fragment, nodes);
      t8 = claim_space(nodes);
      claim_component(section3.$$.fragment, nodes);
      this.h();
    },
    h() {
      if (!src_url_equal(source0.src, source0_src_value = "/background.mp4"))
        attr(source0, "src", source0_src_value);
      attr(source0, "type", "video/mp4");
      if (!src_url_equal(source1.src, source1_src_value = "/background.webm"))
        attr(source1, "src", source1_src_value);
      attr(source1, "type", "video/webm");
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      attr(video, "id", "background");
      attr(video, "class", "w-full h-full svelte-8fii8a");
      video.playsInline = true;
      if (!src_url_equal(img.src, img_src_value = "worldzen.svg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "World Zen");
      attr(img, "class", "svelte-8fii8a");
      attr(a0, "href", "https://app.worldzen.it");
      attr(a0, "class", "svelte-8fii8a");
      attr(div0, "class", "flex items-center gap-2 sm:gap-5");
      attr(a1, "href", "tel:+393932214993");
      attr(a1, "class", "text-2xl sm:text-3xl md:text-6xl font-extrabold svelte-8fii8a");
      attr(div1, "class", "w-full flex justify-between");
      attr(div2, "class", "p-10");
      attr(div3, "class", "absolute top-0 w-full h-full grid place-items-center bg-gradient-to-b from-black/60 to-black/80");
      attr(main, "class", "relative w-full h-screen bg-black");
      attr(div4, "overflow", "");
      set_custom_element_data(amp_ad, "width", "100vw");
      set_custom_element_data(amp_ad, "height", "320");
      set_custom_element_data(amp_ad, "type", "adsense");
      set_custom_element_data(amp_ad, "data-ad-client", "ca-pub-9406040528414499");
      set_custom_element_data(amp_ad, "data-ad-slot", "8074776384");
      set_custom_element_data(amp_ad, "data-auto-format", "rspv");
      set_custom_element_data(amp_ad, "data-full-width", "");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, video);
      append_hydration(video, source0);
      append_hydration(video, source1);
      append_hydration(main, t0);
      append_hydration(main, div3);
      append_hydration(div3, div2);
      append_hydration(div2, a0);
      append_hydration(a0, img);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div1, t2);
      append_hydration(div1, a1);
      append_hydration(a1, t3);
      insert_hydration(target, t4, anchor);
      mount_component(section0, target, anchor);
      insert_hydration(target, t5, anchor);
      mount_component(section1, target, anchor);
      insert_hydration(target, t6, anchor);
      insert_hydration(target, amp_ad, anchor);
      append_hydration(amp_ad, div4);
      insert_hydration(target, t7, anchor);
      mount_component(section2, target, anchor);
      insert_hydration(target, t8, anchor);
      mount_component(section3, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*social*/
      1) {
        each_value = /*social*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      const section0_changes = {};
      if (dirty & /*$$scope*/
      64) {
        section0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section0.$set(section0_changes);
      const section1_changes = {};
      if (dirty & /*$$scope*/
      64) {
        section1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section1.$set(section1_changes);
      const section2_changes = {};
      if (dirty & /*$$scope*/
      64) {
        section2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section2.$set(section2_changes);
      const section3_changes = {};
      if (dirty & /*$$scope*/
      64) {
        section3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section3.$set(section3_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      transition_in(section2.$$.fragment, local);
      transition_in(section3.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      transition_out(section2.$$.fragment, local);
      transition_out(section3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t4);
      destroy_component(section0, detaching);
      if (detaching)
        detach(t5);
      destroy_component(section1, detaching);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(amp_ad);
      if (detaching)
        detach(t7);
      destroy_component(section2, detaching);
      if (detaching)
        detach(t8);
      destroy_component(section3, detaching);
    }
  };
}
function instance($$self) {
  const social = [
    {
      alt: "YouTube",
      href: "https://youtube.com/@ASDWorldZen",
      src: "youtube.webp"
    },
    {
      alt: "Instagram",
      href: "https://www.instagram.com/asdworldzen/",
      src: "instagram.webp"
    },
    {
      alt: "Facebook",
      href: "https://www.facebook.com/taekwondoworldzen",
      src: "facebook.webp"
    },
    {
      alt: "App",
      href: "https://app.worldzen.it",
      src: "favicon.png"
    }
  ];
  return [social];
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
