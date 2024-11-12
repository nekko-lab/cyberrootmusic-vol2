import { component$ } from "@builder.io/qwik";
import { animate, stagger } from "motion";
import { css } from "~/styled-system/css";

export type ListBlock = {
  Content: string;
};

export type ListBlockProps = {
  ListBlocks: Array<ListBlock>;
};

export const ListBlock = component$(({ ListBlocks }: ListBlockProps) => {
  const base_delay = 0.4;
  return (
    <ul
      class={css({
        marginTop: 2,
        marginBottom: 5,
      })}
      id="Attention-list"
      onQVisible$={() => {
        animate(
          "#Attention-list > li",
          { opacity: 1, transform: "translateX(0px)" },
          {
            duration: 0.5,
            delay: stagger(0.125, { start: base_delay + 0.1 }),
            easing: "ease-in-out",
          },
        );
      }}
    >
      {ListBlocks.map((value, index) => {
        return (
          <li
            key={index}
            class={css({
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: ".5em",
              letterSpacing: "0.03em",

              opacity: 0,
              transform: "translateX(-10px)",
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
              class={
                value.Content.length < 40
                  ? css({
                      whiteSpace: { sm: "nowrap", base: "normal" },
                      minW: { sm: "auto", base: "80%" },
                    })
                  : value.Content.length < 44
                    ? css({
                        whiteSpace: { md: "nowrap", base: "normal" },
                        minW: { md: "auto", base: "80%" },
                      })
                    : value.Content.length < 80
                      ? css({
                          whiteSpace: {
                            xl: "nowrap",
                            base: "normal",
                          },
                          minW: { xl: "auto", base: "80%" },
                        })
                      : css({
                          whiteSpace: "normal",
                          minW: "80%",
                        })
              }
            >
              {value.Content}
            </span>
          </li>
        );
      })}
    </ul>
  );
});
