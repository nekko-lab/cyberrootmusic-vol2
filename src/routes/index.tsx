import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Console from "~/components/console";
import Header from "~/components/header";
import Heading from "~/components/heading";
import { css } from "~/styled-system/css";
import { Gradient } from "~/components/gradient.mjs";
import { TimeTable } from "~/components/timeTable";
import { Block } from "~/components/block";
import { ListBlock } from "~/components/listblock";
import { Attention, TimeLine } from "~/components/data";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const gradient = new Gradient();
    gradient.el = document.querySelector("#gradient-canvas");
    gradient.connect();
  });

  return (
    <>
      <Header />
      <canvas
        id="gradient-canvas"
        data-transition-in
        class={css({
          position: "fixed",
          width: "100%",
          height: "150%",
          top: 0,
          left: 0,
          zIndex: -1,
        })}
      />
      <main
        class={css({
          fontFamily: "primary",
        })}
      >
        <dvi
          class={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "calc(100vh - 153px)",
            paddingTop: 153,

            fontSize: { md: "medium", sm: "small", base: 8 },
          })}
        >
          <Console />
        </dvi>
        <div class={css({ borderBottom: "solid 1px" })}>
          <div
            class={css({
              height: "153px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              marginX: "35px",
              paddingBottom: "20px",
              fontSize: "10px",
            })}
          >
            <div
              class={css({
                display: "flex",
                flexDir: "column",
              })}
            >
              <span>Cyber &lt;/&gt; Music</span>
              <span>November. 23-25</span>
              <span>at {"${locale}"}</span>
              <span
                class={css({
                  fontFamily: "barcode",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
                })}
              >
                Nekko Lab
              </span>
            </div>
            <div>2024 &copy; Nekko Lab</div>
          </div>
        </div>
        <div
          class={css({
            h: "100vh",
            maxW: { xl: 1280, lg: 1024, md: 768, sm: 640, base: "90%" },
            marginX: "auto",
            paddingY: "68px",
          })}
        >
          <Heading value="About" description="ライブについて" />
          <Block Title="Overview">
            ホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララホニャララ
          </Block>
          <div>
            <TimeTable events={TimeLine} />
          </div>
          <div>
            <Block Title="Attention" Content="ペンライトについて">
              <ListBlock ListBlocks={Attention} />
            </Block>
          </div>
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Nekko Lab | 津田沼際 75th",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
