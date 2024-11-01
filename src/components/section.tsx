import { component$, Slot } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export type BlockProps = {
  Title: string;
  Content?: string;
};

export const Section = component$(() => {
  return (
    <div
      class={css({
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // debug: true,
        marginY: "30em",

        // minHeight: "100vh"
      })}
    >
      <Slot />
    </div>
  );
});
