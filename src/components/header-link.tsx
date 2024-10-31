import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

type headerLinkProps = {
  value: string;
};

export default component$(({ value }: headerLinkProps) => {
  return (
    <button
      class={css({
        cursor: "pointer",
      })}
      onClick$={() => {
        const targetY = document
          .getElementById(value)
          ?.getBoundingClientRect().top;
        if (!targetY) return;
        const scrollY = targetY != 0 ? targetY - 153 : 0;
        console.log(scrollY);
        scrollBy({ top: scrollY, behavior: "smooth" });
      }}
    >
      {value}
    </button>
  );
});
