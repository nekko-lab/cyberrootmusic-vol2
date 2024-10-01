import { component$, Slot } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export type BlockProps = {
  Title: string;
  Content?: string;
};

export const Block = component$(({ Title, Content }: BlockProps) => {
  return (
    <div>
      <h2
        class={css({
          fontSize: 32,
          fontWeight: 700,

          _after: {
            content: '"/"',
          },
        })}
      >
        {Title}
      </h2>
      {Content ? (
        <p
          class={css({
            fontSize: 16,
          })}
        >
          {Content}
        </p>
      ) : null}
      <Slot />
    </div>
  );
});
