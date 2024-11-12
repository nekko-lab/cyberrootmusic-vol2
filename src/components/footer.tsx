import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <footer
      class={css({
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        paddingBottom: 10,
      })}
    >
      by Nekko lab
    </footer>
  );
});
