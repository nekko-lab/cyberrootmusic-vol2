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
        gap: "8px",
      })}
    >
      <span>Powered by </span>
      <img
        src="src/routes/nc.png"
        alt="Nekko Cloud"
        class={css({
          height: "28px",
          width: "auto",
        })}
      />
    </footer>
  );
});
