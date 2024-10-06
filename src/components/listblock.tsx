import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export type ListBlock = {
  Content: string;
};

export type ListBlockProps = {
  ListBlocks: Array<ListBlock>;
};

export const ListBlock = component$(({ ListBlocks }: ListBlockProps) => {
  return (
    <div
      class={css({
        marginTop: 2,
        marginBottom: 5,
      })}
    >
      {ListBlocks.map((value, index) => {
        return (
          <div
            key={index}
            class={css({
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            })}
          >
            <span>{index + 1}</span>
            <div
              class={css({
                position: "relative",
                width: "full",
                marginX: ".5em",
              })}
            >
              <span
                class={css({
                  position: "absolute",
                  border: "1px dashed silver",
                  width: "full",
                  left: 0,
                })}
              ></span>
            </div>
            <span
              class={css({
                whiteSpace: { sm: "nowrap", base: "normal" },
                minW: { sm: "auto", base: "80%" },
              })}
            >
              {value.Content}
            </span>
          </div>
        );
      })}
    </div>
  );
});
