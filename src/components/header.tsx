import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export default component$(() => {
  const sp_open = useSignal(false);
  useTask$(() => {
    // sp_open.value = true;
  });

  return (
    <header
      class={css({
        position: "fixed",
        zIndex: 1000,
        width: "full",
        fontFamily: "primary",
      })}
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
            <li>about</li>
            <li>info</li>
            <li>venue</li>
            <li>attention</li>
            <li>organizer</li>
            <li>news</li>
          </ul>
        </nav>
      </div>
      <div
        class={css({
          display: { md: "none", base: "inline-block" },
          marginY: "48px",
          position: "relative",
          marginLeft: "2em",

          backdropFilter: "blur(5px)",
        })}
      >
        <button
          class={css({
            w: "2.5em",
            h: "2.5em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            border: "2px solid #FFFDEB",
            borderRadius: 30,

            position: "relative",
            cursor: "pointer",
          })}
          onClick$={() => console.log((sp_open.value = !sp_open.value))}
        >
          <span>&lt;/&gt;</span>
        </button>
        <div
          class={
            sp_open.value
              ? css({
                  display: "block",
                  position: "relative",
                  left: "1em",
                })
              : css({
                  display: "none",
                  position: "absolute",
                  top: "2.5em",
                  left: "1em",
                })
          }
        >
          <nav>
            <ul
              class={css({
                display: "flex",
                flexDir: "column",
                gap: 15,

                "& li": {
                  position: "relative",
                  fontSize: 20,

                  _after: {
                    content: '"/"',
                  },
                },
              })}
            >
              <li>about</li>
              <li>info</li>
              <li>venue</li>
              <li>attention</li>
              <li>organizer</li>
              <li>news</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
