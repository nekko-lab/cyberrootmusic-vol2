import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export type DjEvent = {
  time: string;
  dj: string;
  vj?: string;
};

export type Timeline = {
  events: Array<DjEvent>;
};

export const TimeTable = component$(({ events }: Timeline) => {
  return (
    <div
      class={css({
        marginTop: 2,
        marginBottom: 5,
      })}
    >
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
