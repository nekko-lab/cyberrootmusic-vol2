import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Console from "~/components/console";
import Header from "~/components/header";
import Heading from "~/components/heading";
import { css } from "~/styled-system/css";
import { Gradient } from "~/components/gradient.mjs";
import { TimeTable } from "~/components/timeTable";
import { Block } from "~/components/block";
import { Section } from "~/components/section";
import { ListBlock } from "~/components/listblock";
import { Caution, TimeLine } from "~/components/data";
import Footer from "~/components/footer";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const gradient = new Gradient();
    gradient.el = document.querySelector("#gradient-canvas");
    gradient.connect();
  });

  return (
    <>
      {/* Word Break */}
      <script src="https://unpkg.com/budoux/bundle/budoux-ja.min.js" />
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

          // Word Break
          whiteSpace: "pre-wrap",
          wordBreak: "keep-all",
        })}
      >
        <div
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
        </div>
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
            maxW: { xl: 1280, lg: 1024, md: 768, sm: 640, base: "90%" },
            marginX: "auto",
            paddingY: "68px",
          })}
        >
          {/* --- About --- */}
          <Section>
            <Heading value="About" description="イベントについて" />
            <Block Title="About this event">
              {/* Word Break */}
              <budoux-ja>
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
              </budoux-ja>
            </Block>

            <Block Title="About us">
              {/* Word Break */}
              <budoux-ja>
                ネッコ研は、デジタルコンテンツやシステムを製作する創作×技術系サークルです。
                <br />
                現在、以下のチームが活動中！
              </budoux-ja>
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
                  {/* Word Break */}
                  <budoux-ja>
                    <p>
                      ボカロオタク達がアツいライブを製作するチーム、Miku's
                      Originです！
                    </p>
                  </budoux-ja>
                </li>
                <li>
                  <h3>Nekko Cloud</h3>
                  {/* Word Break */}
                  <budoux-ja>
                    <p>
                      おもしろ実験プライベートクラウド「Nekko
                      Cloud」を開発するチームです！
                    </p>
                  </budoux-ja>
                </li>
              </ul>
            </Block>
          </Section>

          {/* --- Attention --- */}
          <Section>
            <Heading value="Attention" description="注意事項" />
            {/* Word Break */}
            <budoux-ja>
              <ListBlock ListBlocks={Caution} />
            </budoux-ja>
          </Section>

          {/* --- TimeTable --- */}
          <Section>
            <Heading value="TimeTable" description="公演時間" />
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
          </Section>

          {/* --- Venue --- */}
          <Section>
            <Heading value="Venue" description="開催場所" />
            <budoux-ja>
              <p>千葉工業大学 津田沼キャンパス 6号館 1階 615教室</p>
            </budoux-ja>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Cyber </> Music by Nekko Lab",
  meta: [
    {
      name: "description",
      content: "Nekko Lab 千葉工業大学 津田沼際 75th ホームページ",
    },
  ],
};
