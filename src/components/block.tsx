import { component$, Slot } from "@builder.io/qwik";
import { animate } from "motion";
import { css } from "~/styled-system/css";

export type BlockProps = {
  Title: string;
  Content?: string;
};

export const Block = component$(({ Title, Content }: BlockProps) => {
  const base_delay = 0.4;

  return (
    <div
      class={css({
        marginTop: 2,
        marginBottom: 5,
      })}
    >
      <h2
        class={css({
          fontSize: 32,
          fontWeight: 700,
          marginTop: 2,

          width: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",

          _after: {
            content: '"/"',
          },
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { width: "100%" },
            { duration: 2, delay: base_delay, easing: "ease-out" },
          );
        }}
      >
        {Title}
      </h2>
      {Content ? (
        <span
          class={css({
            fontSize: 16,

            display: "block",
            width: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
          })}
          onQVisible$={(e) => {
            animate(
              e.detail.target,
              { width: "100%" },
              { duration: 2, delay: base_delay + 0.1, easing: "ease-out" },
            );
          }}
        >
          {Content}
        </span>
      ) : null}
      <div
        class={css({
          marginTop: 2,
          marginBottom: 5,
          opacity: 0,
          transform: "translateX(-10px)",
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: 1, transform: "translateX(0px)" },
            {
              duration: 0.5,
              delay: base_delay + (Content ? 0.2 : 0.1),
              easing: "ease-in-out",
            },
          );
        }}
      >
        <Slot />
      </div>
    </div>
  );
});
