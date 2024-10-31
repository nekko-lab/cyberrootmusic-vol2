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
import { Caution, TimeLine } from "~/components/data";

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
        <div
          class={css({
            height: "154px",
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
        <div
          class={css({
            h: "100vh",
            maxW: { xl: 1280, lg: 1024, md: 768, sm: 640, base: "90%" },
            marginX: "auto",
            paddingY: "68px",
          })}
        >
          <Heading value="About" description="イベントについて" />
          <Block Title="About this event">
            😎
            音楽が"まわる"、ステージが"まわる"、自由に体を揺らせる空間へようこそ！
            😎
            <br />
            Cyber &lt;/&gt; Music (サイバー ルート ミュージック)
            は、音楽と観客が主役になれるDJイベントです。
            <br />
            体を解放して音楽とひとつになれる、そんな空間を目指しています。
            <br />
            グルーブに乗って自由なムーブメントで踊ろう！
          </Block>

          <Block Title="About us">
            ネッコ研は、デジタルコンテンツやシステムを製作する創作×技術系サークルです。
            <br />
            現在、以下のチームが活動中！
            <ul
              class={css({
                "& li": {
                  listStyleType: "disc",
                  left: "1em",
                  position: "relative",
                  marginTop: "1em",

                  "& h3": {
                    fontSize: "1.2em",
                  },

                  "& p": {
                    marginTop: ".2em",
                  },
                },
              })}
            >
              <li>
                <h3>Miku's Origin</h3>
                <p>
                  ボカロオタク達がアツいライブを製作するチーム、Miku's
                  Originです！
                </p>
              </li>
              <li>
                <h3>Nekko Cloud</h3>
                <p>
                  おもしろ実験プライベートクラウド「Nekko
                  Cloud」を開発するチームです！'s Originです！
                </p>
              </li>
            </ul>
          </Block>

          <Heading value="Attention" description="注意事項について" />
          <ListBlock ListBlocks={Caution} />

          <Heading value="TimeTable" description="公演時間について" />
          <div
            class={css({
              display: { base: "block", md: "flex" },
              justifyContent: "space-between",
            })}
          >
            {TimeLine.map((value, index) => {
              return (
                <div
                  key={index}
                  class={css({
                    width: "full",
                    marginX: "10px",
                  })}
                >
                  <TimeTable events={value} header={`day ${index + 1}`} />
                </div>
              );
            })}
          </div>
          <Heading value="Venue" description="開催場所について" />
          <p>千葉工業大学 津田沼キャンパス 6号館 1階 615教室</p>
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
      content: "Nekko Lab 千葉工業大学 津田沼際 75th ホームページ",
    },
  ],
};
