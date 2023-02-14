import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, c as claim_space, h as detach, n as attr, b as insert_hydration, H as append_hydration, u as set_data, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, f as transition_in, t as transition_out, x as create_component, y as claim_component, J as src_url_equal, z as mount_component, A as destroy_component, C as noop, p as set_style } from "../../chunks/index-4506c01f.js";
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
      attr(div, "class", "w-full flex flex-wrap justify-start items-center gap-4");
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
function instance($$self, $$props, $$invalidate) {
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
    init(this, options, instance, create_fragment$1, safe_not_equal, {
      title: 0,
      icon: 1,
      href: 2,
      background: 3
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_2(ctx) {
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
  let t3;
  let img4;
  let img4_src_value;
  return {
    c() {
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      img2 = element("img");
      t2 = space();
      img3 = element("img");
      t3 = space();
      img4 = element("img");
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
      t3 = claim_space(nodes);
      img4 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = "app-1.png"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "App 1");
      attr(img0, "class", "h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img1.src, img1_src_value = "app-2.png"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "App 2");
      attr(img1, "class", "h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img2.src, img2_src_value = "app-3.png"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "App 3");
      attr(img2, "class", "h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img3.src, img3_src_value = "app-4.png"))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "App 4");
      attr(img3, "class", "h-[70vh] svelte-8fii8a");
      if (!src_url_equal(img4.src, img4_src_value = "app-5.png"))
        attr(img4, "src", img4_src_value);
      attr(img4, "alt", "App 5");
      attr(img4, "class", "h-[70vh] svelte-8fii8a");
    },
    m(target, anchor) {
      insert_hydration(target, img0, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, img1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, img2, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, img3, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, img4, anchor);
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
      if (detaching)
        detach(t3);
      if (detaching)
        detach(img4);
    }
  };
}
function create_default_slot_1(ctx) {
  let img0;
  let img0_src_value;
  let t0;
  let img1;
  let img1_src_value;
  let t1;
  let img2;
  let img2_src_value;
  return {
    c() {
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      img2 = element("img");
      this.h();
    },
    l(nodes) {
      img0 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t0 = claim_space(nodes);
      img1 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      t1 = claim_space(nodes);
      img2 = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = "worldzen.png"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "World Zen");
      attr(img0, "class", "max-h-screen md:max-h-[50vh] svelte-8fii8a");
      if (!src_url_equal(img1.src, img1_src_value = "m13k.png"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "M13K");
      attr(img1, "class", "max-h-screen md:max-h-[50vh] svelte-8fii8a");
      if (!src_url_equal(img2.src, img2_src_value = "insta.png"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "Instagram");
      attr(img2, "class", "max-h-screen md:max-h-[50vh] svelte-8fii8a");
    },
    m(target, anchor) {
      insert_hydration(target, img0, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, img1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, img2, anchor);
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
    }
  };
}
function create_default_slot(ctx) {
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
  let img0;
  let img0_src_value;
  let t1;
  let div1;
  let div0;
  let a1;
  let img1;
  let img1_src_value;
  let t2;
  let a2;
  let img2;
  let img2_src_value;
  let t3;
  let a3;
  let img3;
  let img3_src_value;
  let t4;
  let img4;
  let img4_src_value;
  let t5;
  let a4;
  let t6;
  let t7;
  let section0;
  let t8;
  let section1;
  let t9;
  let section2;
  let current;
  section0 = new Section({
    props: {
      title: "Taekwon-Do App",
      icon: "download",
      href: "https://app.worldzen.it",
      background: "bg-gradient-to-tr from-black to-red-900",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  section1 = new Section({
    props: {
      title: "Corsi",
      icon: "sports_martial_arts",
      background: "bg-gradient-to-br from-black to-red-900",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  section2 = new Section({
    props: {
      title: "Dove trovarci?",
      icon: "pin_drop",
      background: "bg-gradient-to-tr from-black to-red-900",
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
      img0 = element("img");
      t1 = space();
      div1 = element("div");
      div0 = element("div");
      a1 = element("a");
      img1 = element("img");
      t2 = space();
      a2 = element("a");
      img2 = element("img");
      t3 = space();
      a3 = element("a");
      img3 = element("img");
      t4 = space();
      img4 = element("img");
      t5 = space();
      a4 = element("a");
      t6 = text("3932214993");
      t7 = space();
      create_component(section0.$$.fragment);
      t8 = space();
      create_component(section1.$$.fragment);
      t9 = space();
      create_component(section2.$$.fragment);
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
      img0 = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
      a0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a1 = claim_element(div0_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a1_nodes = children(a1);
      img1 = claim_element(a1_nodes, "IMG", { src: true, alt: true, class: true });
      a1_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      a2 = claim_element(div0_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a2_nodes = children(a2);
      img2 = claim_element(a2_nodes, "IMG", { src: true, alt: true, class: true });
      a2_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      a3 = claim_element(div0_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a3_nodes = children(a3);
      img3 = claim_element(a3_nodes, "IMG", { src: true, alt: true, class: true });
      a3_nodes.forEach(detach);
      t4 = claim_space(div0_nodes);
      img4 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
      div0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      a4 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      t6 = claim_text(a4_nodes, "3932214993");
      a4_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t7 = claim_space(nodes);
      claim_component(section0.$$.fragment, nodes);
      t8 = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
      t9 = claim_space(nodes);
      claim_component(section2.$$.fragment, nodes);
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
      if (!src_url_equal(img0.src, img0_src_value = "worldzen.svg"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "World Zen");
      attr(img0, "class", "svelte-8fii8a");
      attr(a0, "href", "https://app.worldzen.it");
      attr(a0, "class", "svelte-8fii8a");
      if (!src_url_equal(img1.src, img1_src_value = "youtube-2.png"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "YouTube");
      attr(img1, "class", "h-8 sm:h-14 md:h-20 drop-shadow-2xl svelte-8fii8a");
      attr(a1, "href", "https://youtube.com/@ASDWorldZen");
      attr(a1, "target", "_blank");
      attr(a1, "rel", "noreferrer");
      attr(a1, "class", "svelte-8fii8a");
      if (!src_url_equal(img2.src, img2_src_value = "instagram-1.png"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "Instagram");
      attr(img2, "class", "h-8 sm:h-14 md:h-20 svelte-8fii8a");
      attr(a2, "href", "https://www.instagram.com/asdworldzen/ ");
      attr(a2, "target", "_blank");
      attr(a2, "rel", "noreferrer");
      attr(a2, "class", "svelte-8fii8a");
      if (!src_url_equal(img3.src, img3_src_value = "facebook-1.png"))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "Facebook");
      attr(img3, "class", "h-8 sm:h-14 md:h-20 svelte-8fii8a");
      attr(a3, "href", "https://www.facebook.com/taekwondoworldzen");
      attr(a3, "target", "_blank");
      attr(a3, "rel", "noreferrer");
      attr(a3, "class", "svelte-8fii8a");
      if (!src_url_equal(img4.src, img4_src_value = "favicon.png"))
        attr(img4, "src", img4_src_value);
      attr(img4, "alt", "App");
      attr(img4, "class", "hidden md:visible md:h-20 svelte-8fii8a");
      attr(div0, "class", "flex items-center gap-2 sm:gap-5");
      attr(a4, "href", "tel:+393932214993");
      attr(a4, "class", "text-2xl sm:text-3xl md:text-6xl font-extrabold svelte-8fii8a");
      attr(div1, "class", "w-full flex justify-between");
      attr(div2, "class", "p-10");
      attr(div3, "class", "absolute top-0 w-full h-full grid place-items-center bg-gradient-to-b from-black/60 to-black/80");
      attr(main, "class", "relative w-full h-screen bg-black");
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
      append_hydration(a0, img0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      append_hydration(div0, a1);
      append_hydration(a1, img1);
      append_hydration(div0, t2);
      append_hydration(div0, a2);
      append_hydration(a2, img2);
      append_hydration(div0, t3);
      append_hydration(div0, a3);
      append_hydration(a3, img3);
      append_hydration(div0, t4);
      append_hydration(div0, img4);
      append_hydration(div1, t5);
      append_hydration(div1, a4);
      append_hydration(a4, t6);
      insert_hydration(target, t7, anchor);
      mount_component(section0, target, anchor);
      insert_hydration(target, t8, anchor);
      mount_component(section1, target, anchor);
      insert_hydration(target, t9, anchor);
      mount_component(section2, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const section0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        section0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section0.$set(section0_changes);
      const section1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        section1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section1.$set(section1_changes);
      const section2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        section2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      section2.$set(section2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      transition_in(section2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      transition_out(section2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      if (detaching)
        detach(t7);
      destroy_component(section0, detaching);
      if (detaching)
        detach(t8);
      destroy_component(section1, detaching);
      if (detaching)
        detach(t9);
      destroy_component(section2, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
