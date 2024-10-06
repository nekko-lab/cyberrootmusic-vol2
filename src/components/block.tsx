import { component$, Slot } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export type BlockProps = {
  Title: string;
  Content?: string;
};

export const Block = component$(({ Title, Content }: BlockProps) => {
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

          _after: {
            content: '"/"',
          },
        })}
      >
        {Title}
      </h2>
      {Content ? (
        <span
          class={css({
            fontSize: 16,
          })}
        >
          {Content}
        </span>
      ) : null}
      <div
        class={css({
          marginTop: 2,
          marginBottom: 5,
        })}
      >
        <Slot />
      </div>
    </div>
  );
});
