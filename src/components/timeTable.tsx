import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const TimeTable = component$(({ events }: Timeline) => {
  return (
    <div>
      <h1>(Timetable/)</h1>
      <div>
        {events.map((e) => {
          return (
            <div
              key={e.time}
              class={css({
                marginTop: 4,
                position: "relative",
                display: "flex",
                justifyContent: "space-between",

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
                    top: ".75rem",
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
