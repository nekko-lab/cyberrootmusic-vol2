import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import NcLogo from "~/routes/nc.png?jsx";

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
      <NcLogo
        alt="Nekko Cloud"
        class={css({
          height: "28px",
          width: "auto",
        })}
      />
    </footer>
  );
});
