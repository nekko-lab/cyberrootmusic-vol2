import { component$ } from "@builder.io/qwik";
import { animate } from "motion";
import { css } from "~/styled-system/css";

type Heading = {
  value: string;
  description: string;
};

export default component$(({ value, description }: Heading) => {
  const base_delay = 0.4;

  return (
    <div
      class={css({
        position: "relative",
      })}
      id={value}
    >
      <span
        class={css({
          position: "absolute",
          left: 0,
          top: 3,
          fontFamily: "heading_ja",
          fontWeight: 900,
          fontSize: "48px",
          color: "transparent",
          zIndex: 10,
          WebkitTextStroke: ".5px #5a5dff",
          opacity: 0,
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: [0, 1, 0, 1, 0, 1] },
            { duration: 0.5, delay: base_delay },
          );
        }}
      >
        {description}
      </span>
      <h1
        class={css({
          fontFamily: "heading_en",
          fontWeight: 900,
          fontSize: "64px",
          zIndex: 5,
          position: "relative",
          opacity: 0,
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: [0, 1, 0, 1, 0, 1] },
            { duration: 0.5, delay: base_delay + 0.1 },
          );
        }}
      >
        {value}
      </h1>
      <span
        class={css({
          position: "absolute",
          left: 0,
          top: 3,
          fontFamily: "heading_ja",
          fontWeight: 900,
          fontSize: "48px",
          color: "#5A5DFF",
          zIndex: 0,
          opacity: 0,
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: [0, 1, 0, 1, 0, 1] },
            { duration: 0.5, delay: base_delay + 0.3 },
          );
        }}
      >
        {description}
      </span>
      <span
        class={css({
          fontFamily: "barcode",
          fontSize: "20px",
          position: "relative",
          top: -3,
          opacity: 0,
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: [0, 1] },
            { duration: 0.5, delay: base_delay + 0.3 },
          );
        }}
      >
        {value}
      </span>
    </div>
  );
});
