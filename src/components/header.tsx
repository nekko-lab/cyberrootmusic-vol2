import { component$, useSignal } from "@builder.io/qwik";
import { animate, stagger } from "motion";
import { css } from "~/styled-system/css";
import HeaderLink from "./header-link";

export default component$(() => {
  const sp_open = useSignal(false);
  return (
    <header
      class={css({
        position: "fixed",
        zIndex: 1000,
        width: "full",
        fontFamily: "primary",
      })}
      onQVisible$={(e) => {
        animate(
          e.detail.target,
          { opacity: [0, 1] },
          { duration: 1, easing: "ease-in-out", delay: 1 },
        );
      }}
    >
      <div
        class={css({
          display: { md: "flex", base: "none" },
          justifyContent: "space-between",
          fontWeight: 300,
          fontSize: 20,
          backdropFilter: "blur(5px)",

          px: 7,
          py: 3,
          border: "solid 2px",
          borderRadius: 10,
          margin: "auto",
          marginY: "48px",
          maxW: { xl: 1280, lg: 1024, md: 748, sm: 640, base: "100%" },
        })}
      >
        <span>&lt;/&gt;</span>
        <nav>
          <ul
            class={css({
              display: "flex",
              gap: 15,

              "& li": {
                position: "relative",

                _before: {
                  content: '"/"',
                },
              },
            })}
          >
            <li>
              <HeaderLink value="About" />
            </li>
            <li>
              <HeaderLink value="Attention" />
            </li>
            <li>
              <HeaderLink value="TimeTable" />
            </li>
            <li>
              <HeaderLink value="Venue" />
            </li>
          </ul>
        </nav>
      </div>
      <div
        class={css({
          display: { md: "none", base: "inline-block" },
          marginY: "40px",
          position: "relative",
          marginLeft: "2em",
        })}
      >
        <button
          class={[
            css({
              w: "2.5em",
              h: "2.5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              border: "2px solid #FFFDEB",
              borderRadius: 30,
              overflow: "hidden",

              position: "relative",
              cursor: "pointer",
              backdropFilter: "blur(5px)",

              zIndex: 10,
            }),
            "sp_menu_button",
          ]}
          onClick$={() => {
            sp_open.value = !sp_open.value;
            animate(".sp_menu_button", { scale: [1.2, 1] }, { duration: 0.6 });

            if (!sp_open.value) {
              animate(
                "ul > li > span:nth-child(2)",
                { width: 0 },
                {
                  duration: 0.2,
                  delay: stagger(0.08, { from: "last" }),
                  easing: "ease-in-out",
                },
              );
              animate(
                "ul > li > span:nth-child(1)",
                { width: 0 },
                {
                  duration: 0.1,
                  delay: stagger(0.08, { start: 0.1, from: "last" }),
                  easing: "ease-in-out",
                },
              );
              animate(
                "ul > span",
                { height: 0 },
                { duration: 0.4, delay: 0.2, easing: "ease-in-out" },
              );
              animate(".sp_menu", { display: "none" }, { duration: 0.6 });
            } else {
              animate(".sp_menu", { display: "block" }, { duration: 0 });
              animate(
                "ul > span",
                { height: "calc(100% - .8em)" },
                { duration: 0.4, easing: "ease-in-out" },
              );
              animate(
                "ul > li > span:nth-child(1)",
                { width: "15px" },
                { duration: 0.1, delay: stagger(0.08), easing: "ease-in-out" },
              );
              animate(
                "ul > li > span:nth-child(2)",
                { width: "100%" },
                {
                  duration: 0.2,
                  delay: stagger(0.08, { start: 0.1 }),
                  easing: "ease-in-out",
                },
              );
            }
          }}
        >
          <span>&lt;/&gt;</span>
        </button>
        <div
          class={[
            css({
              display: "none",
              position: "relative",
              // left: "3em",
              top: -4,
              paddingX: 5,
              paddingY: 5,

              backdropFilter: "blur(10px)",
              borderRadius: "5px",
              borderTopLeftRadius: 0,

              maskImage:
                "linear-gradient(to top, rgb(0 0 0 / 100%) 85%, rgb(0 0 0 / 0%) 100%), \
              linear-gradient(to bottom, rgb(0 0 0 / 100%) 85%, rgb(0 0 0 / 0%) 100%), \
              linear-gradient(to left, rgb(0 0 0 / 100%) 85%, rgb(0 0 0 / 0%) 100%), \
              linear-gradient(to right, rgb(0 0 0 / 100%) 85%, rgb(0 0 0 / 0%) 100%)",
              maskComposite: "intersect",
            }),
            "sp_menu",
          ]}
        >
          <nav>
            <ul
              class={css({
                display: "flex",
                flexDir: "column",
                gap: 15,
                paddingTop: 15,
                paddingLeft: 19,
                position: "relative",
                w: 140,

                "& li": {
                  position: "relative",
                  fontSize: 20,

                  "& span:nth-child(1)": {
                    width: 0,
                    height: "2px",
                    bg: "primary",
                    position: "absolute",
                    top: ".75em",
                    left: -19,
                  },

                  "& span:nth-child(2)": {
                    display: "block",
                    overflow: "hidden",
                    w: 0,
                    whiteSpace: "nowrap",

                    _after: {
                      content: '"/"',
                    },
                  },
                },
              })}
            >
              <span
                class={css({
                  width: "2px",
                  height: "0",
                  bg: "primary",
                  position: "absolute",
                  top: 0,
                  left: 0,
                })}
              ></span>
              <li>
                <span></span>
                <span>
                  <HeaderLink value="About" />
                </span>
              </li>
              <li>
                <span></span>
                <span>
                  <HeaderLink value="TimeTable" />
                </span>
              </li>
              <li>
                <span></span>
                <span>
                  <HeaderLink value="Attention" />
                </span>
              </li>
              <li>
                <span></span>
                <span>
                  <HeaderLink value="Venue" />
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
