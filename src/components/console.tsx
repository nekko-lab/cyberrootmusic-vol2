import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { animate } from "motion";
import Granim from "granim";

export default component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => canvasRef.value);

    if (canvasRef.value) {
      new Granim({
        element: canvasRef.value,
        direction: "left-right",
        states: {
          "default-state": {
            gradients: [
              ["#EB3349", "#F45C43"],
              ["#FF8008", "#FFC837"],
              ["#4CB8C4", "#3CD3AD"],
              ["#24C6DC", "#514A9D"],
              ["#FF512F", "#DD2476"],
              ["#DA22FF", "#9733EE"],
            ],
            transitionSpeed: 2000,
          },
        },
      });
    }
  });

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
            color: "#ffff00ff",
          })}
        >
          admin@nekko_lab
        </span>
        <span
          class={css({
            color: "#ff6fffff",
          })}
        >
          ~/tsudanuma25
        </span>
        <span
          class={css({
            color: "#ff6fffff",
          })}
        >
          $
        </span>
        <span
          class={css({
            color: "#f9f9f9ff",
          })}
        >
          cat title.vol2.txt
        </span>
      </div>
      <div
        class={css({
          position: "relative",
          width: "100%",
          minHeight: "150px",
        })}
      >
        <canvas
          ref={canvasRef}
          class={css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "block",
          })}
        />
        <span
          class={css({
            color: "#f9f9f9ff",
            position: "relative",
            display: "block",
            mixBlendMode: "difference",
          })}
        >
          &nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          &nbsp;/&nbsp;___|&nbsp;&nbsp;&nbsp;_|&nbsp;|__&nbsp;&nbsp;&nbsp;___&nbsp;_&nbsp;__&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;///\\\&nbsp;&nbsp;|&nbsp;&nbsp;\/&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;_&nbsp;___(_)&nbsp;___&nbsp;
          <br />
          |&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;'_&nbsp;\&nbsp;/&nbsp;_&nbsp;\&nbsp;'__|&nbsp;///&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;\\\&nbsp;|&nbsp;|\/|&nbsp;|&nbsp;|&nbsp;|&nbsp;/&nbsp;__|&nbsp;|/&nbsp;__|
          <br />
          |&nbsp;|__|&nbsp;|_|&nbsp;|&nbsp;|_)&nbsp;|&nbsp;&nbsp;__/&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;\\\&nbsp;&nbsp;///&nbsp;&nbsp;&nbsp;///&nbsp;|&nbsp;|&nbsp;&nbsp;|&nbsp;|&nbsp;|_|&nbsp;\__&nbsp;\&nbsp;|&nbsp;(__&nbsp;
          <br />
          &nbsp;\____\__,&nbsp;|_.__/&nbsp;\___|_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\///&nbsp;&nbsp;&nbsp;///&nbsp;&nbsp;|_|&nbsp;&nbsp;|_|\__,_|___/_|\___|
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___/
        </span>
      </div>
    </div>
  );
});
