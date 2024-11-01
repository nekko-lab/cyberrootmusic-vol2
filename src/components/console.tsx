import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { animate } from "motion";

export default component$(() => {
  return (
    <div
      class={css({
        fontFamily: "primary",
        fontWeight: 700,
      })}
      onQVisible$={(e) => {
        animate(
          e.detail.target,
          { opacity: [0, 1, 0, 1, 0, 0, 0, 0, 1] },
          { duration: 0.7, delay: 0 },
        );
      }}
    >
      <div
        class={css({
          display: "flex",
          gap: ".5rem",
        })}
      >
        <span
          class={css({
            color: "#41ff58",
          })}
        >
          admin@nekko_lab
        </span>
        <span
          class={css({
            color: "#5a5dff",
          })}
        >
          ~/tsudanuma24
        </span>
        <span
          class={css({
            color: "#5a5dff",
          })}
        >
          $
        </span>
        <span>cat title.txt</span>
      </div>
      <span>
        &nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        &nbsp;/&nbsp;___|&nbsp;&nbsp;&nbsp;_|&nbsp;|__&nbsp;&nbsp;&nbsp;___&nbsp;_&nbsp;__&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;/\&nbsp;\&nbsp;&nbsp;|&nbsp;&nbsp;\/&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_&nbsp;___(_)&nbsp;___&nbsp;
        <br />
        |&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;'_&nbsp;\&nbsp;/&nbsp;_&nbsp;\&nbsp;'__|&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;\&nbsp;\&nbsp;|&nbsp;|\/|&nbsp;|&nbsp;|&nbsp;|&nbsp;/&nbsp;__|&nbsp;|/&nbsp;__|
        <br />
        |&nbsp;|__|&nbsp;|_|&nbsp;|&nbsp;|_)&nbsp;|&nbsp;&nbsp;__/&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;|_|&nbsp;\__&nbsp;\&nbsp;|&nbsp;(__&nbsp;
        <br />
        &nbsp;\____\__,&nbsp;|_.__/&nbsp;\___|_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\_\/_/&nbsp;&nbsp;&nbsp;/_/&nbsp;&nbsp;|_|&nbsp;&nbsp;|_|\__,_|___/_|\___|
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___/
      </span>
    </div>
  );
});
