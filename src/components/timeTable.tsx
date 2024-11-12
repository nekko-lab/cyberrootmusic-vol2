import { component$ } from "@builder.io/qwik";
import { animate } from "motion";
import { css } from "~/styled-system/css";

export type DjEvent = {
  time: string;
  dj: string;
  vj?: string;
};

export type Timeline = {
  events: Array<DjEvent>;
  header?: string;
};

export const TimeTable = component$(({ events, header }: Timeline) => {
  const base_delay = 0.4;
  return (
    <div
      class={css({
        marginTop: 2,
        marginBottom: 5,
      })}
    >
      <h1
        class={css({
          width: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: "1.3em",
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { width: "100%" },
            { duration: 2, delay: base_delay + 0.1, easing: "ease-out" },
          );
        }}
      >
        {header ? header : "(Timetable/)"}
      </h1>
      <div
        class={css({
          opacity: 0,
          transform: "translateX(-10px)",
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: 1, transform: "translateX(0px)" },
            { duration: 0.5, delay: base_delay + 0.1, easing: "ease-in-out" },
          );
        }}
      >
        {events.map((e) => {
          return (
            <div
              key={e.time}
              class={css({
                marginTop: 4,
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                _before: {
                  content: '"|"',
                  position: "absolute",
                  left: 5,
                  top: -5,
                },

                _first: {
                  _before: {
                    content: '""',
                  },
                  marginTop: 0,
                },
              })}
            >
              <span>{e.time}</span>
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
              <span>{e.dj}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
