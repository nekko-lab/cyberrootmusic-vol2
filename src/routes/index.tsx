import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Console from "~/components/console";
import Header from "~/components/header";
import Heading from "~/components/heading";
import { css } from "~/styled-system/css";
import { TimeTable } from "~/components/timeTable";
import { Block } from "~/components/block";
import { Section } from "~/components/section";
import { ListBlock } from "~/components/listblock";
import { Caution, TimeLine } from "~/components/data";
import Footer from "~/components/footer";
import { animate } from "motion";
import Map from "./map.png?jsx";
import Character from "./logo2025.jpeg?jsx";
// import Nekoreru_menu from "./nekoteru_menu.jpg?jsx";
// import Nekoteru from "./nekoteru.jpg?jsx";
import { HStack } from "~/styled-system/jsx";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    // Vanta.jsの初期化
    if (typeof window !== "undefined" && (window as any).VANTA) {
      (window as any).VANTA.FOG({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x5fe6,
        midtoneColor: 0x15c5,
        lowlightColor: 0x670089,
        baseColor: 0x32367a,
        blurFactor: 0.53,
        speed: 3.0,
        zoom: 2.0,
      });
    }
  });

  const base_delay = 0.2;

  return (
    <>
      {/* Word Break */}
      <script src="https://unpkg.com/budoux/bundle/budoux-ja.min.js" />
      {/* Vanta.js */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js" />
      <Header />

      {/* --- background vanta --- */}
      <div
        id="vanta-background"
        data-transition-in
        class={css({
          position: "fixed",
          width: "100%",
          height: "150%",
          top: 0,
          left: 0,
          zIndex: -1,
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: [0, 1] },
            { duration: 1, easing: "ease-in-out", delay: 0.2 },
          );
        }}
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

        {/* --- decoration --- */}
        <div
          class={css({
            position: "fixed",
            width: "100%",
            height: "154px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            // marginX: "35px",
            paddingX: "35px",
            paddingBottom: "20px",
            fontSize: "10px",
          })}
          onQVisible$={(e) => {
            animate(
              e.detail.target,
              { opacity: [0, 1] },
              { duration: 1, easing: "ease-in-out", delay: 0.7 },
            );
          }}
        >
          <div
            class={css({
              display: "flex",
              flexDir: "column",
            })}
          >
            <span>Cyber &lt;/&gt; Music</span>
            <span>November. 22-23</span>
            <span>at CIT Tsudanuma Campus</span>
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
          <div>2025 &copy; Nekko Lab</div>
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
            <div
              class={css({
                display: "flex",
                gap: { lg: 20, base: 5 },
                flexDir: { lg: "row", base: "column" },
              })}
            >
              <div>
                <Block Title="About this event">
                  {/* Word Break */}
                  <budoux-ja>
                    😎
                    音楽と音楽が"まざる"、人と人が"まざる"、自由な音楽の空間へようこそ！
                    😎
                    <br />
                    Cyber &lt;/&gt; Music (サイバー ルート ミュージック)
                    は、音楽とみんなが主役になれるDJイベントです。
                    <br />
                    体を解放して音楽とひとつになれる、そんな空間を目指しています。
                    <br />
                    グルーブに乗って自由なムーブメントで踊ろう！
                  </budoux-ja>
                </Block>

                <Block Title="About us">
                  {/* Word Break */}
                  <budoux-ja>
                    ネットワークコンテンツ研究会は、デジタルコンテンツやシステムを製作する創作×技術系サークルです。
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
              </div>
              <div
                class={css({
                  display: "flex",
                  flexDir: "column",
                  alignItems: "center",
                  opacity: 0,
                  transform: "translateX(-10px)",
                  minWidth: "354px",
                })}
                onQVisible$={(e) => {
                  animate(
                    e.detail.target,
                    { opacity: 1, transform: "translateX(0px)" },
                    {
                      duration: 0.3,
                      delay: base_delay + 0.4,
                      easing: "ease-in-out",
                    },
                  );
                }}
              >
                <Character
                  class={css({
                    margin: { lg: 0, base: "auto" },
                    height: "auto",
                    maxHeight: 500,
                    width: "auto",
                    maxWidth: 500,
                  })}
                  alt="ロゴ2025"
                />
              </div>
            </div>
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
                    <TimeTable
                      events={value}
                      header={`day ${1 + index} 11/${22 + index}`}
                    />
                  </div>
                );
              })}
            </div>
          </Section>

          {/* --- Venue --- */}
          <Section>
            <Heading value="Venue" description="開催場所" />
            <budoux-ja>
              <p
                class={css({
                  fontSize: "26px",
                  letterSpacing: "0.02em",
                  opacity: 0,
                  transform: "translateX(-10px)",
                })}
                onQVisible$={(e) => {
                  animate(
                    e.detail.target,
                    { opacity: 1, transform: "translateX(0px)" },
                    {
                      duration: 0.5,
                      delay: base_delay + 0.2,
                      easing: "ease-in-out",
                    },
                  );
                }}
              >
                千葉工業大学 津田沼キャンパス 6号館 1階 615教室
              </p>
              <div
                class={css({
                  display: "flex",
                  gap: 6,
                  flexDir: { md: "row", base: "column" },
                  alignItems: "center",
                  marginTop: "10px",
                  opacity: 0,
                  transform: "translateX(-10px)",
                })}
                onQVisible$={(e) => {
                  animate(
                    e.detail.target,
                    { opacity: 1, transform: "translateX(0px)" },
                    {
                      duration: 0.6,
                      delay: base_delay + 0.45,
                      easing: "ease-in-out",
                    },
                  );
                }}
              >
                <Map
                  class={css({
                    bg: "#f6f6f6",
                    borderRadius: 5,
                    overflow: "hidden",
                    width: { base: "full" },
                  })}
                  alt="会場案内マップ"
                />
                <iframe
                  class={css({
                    width: "full",
                    height: { base: "500px" },
                    borderRadius: 5,
                    overflow: "hidden",
                  })}
                  title="千葉工業大学のGoogle Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.479229660451!2d140.018525971287!3d35.689822914710305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602280271c38ab81%3A0x9b26ed71e15bb456!2z5Y2D6JGJ5bel5qWt5aSn5a2mIOa0peeUsOayvOOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1731421291588!5m2!1sja!2sjp"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </budoux-ja>
          </Section>

          {/* --- Venue --- */}
          <Section>
            <Heading value="SpecialThanks" description="協力" />
            <Block Title="D.D.D">
              <p
                class={css({
                  marginBottom: 20,
                })}
              >
                千葉工大非公認のインカレdjサークル D.D.D🎧
                毎週月曜と木曜の16時から19時まで練習会を開催！
                定期イベントも開催しています🙈
                メンバー募集中ですので音楽好きな方、DJやってみたい方お待ちしてます！
              </p>
              <HStack gap="4" marginTop="4">
                <a
                  href="https://twitter.com/ddd_cit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://abs.twimg.com/responsive-web/client-web/icon-svg.ea5ff4aa.svg"
                    alt="X"
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ddd.cit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v4/yI/r/VsNE-OHk_8a.png"
                    alt="Instagram"
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="https://www.ddd-cit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                    <line x1="8" x2="16" y1="12" y2="12" />
                  </svg>
                </a>
              </HStack>
            </Block>
            <Block Title="千葉工業大学文化会所属ソフトメディア研究会">
              <p
                class={css({
                  marginBottom: 20,
                })}
              >
                ソフトメディア研究会はパソコンを中心に創作活動を行うサークルです。
                プログラム班、マルチメディア班、DTM班の3班で活動しています。
                大学で開催される文化の祭典と津田沼祭には各自が作品を出品します。
                ソフメ/千葉工大 デジゲー博/M3/コミティアなどに出展！
                連絡はDMまで！
                <br />
                当日は、部員が制作した楽曲の展示や、一部楽曲のデモプレイが可能なスペースをご用意しております。部員一同、皆様のご来場を心よりお待ちしております。
              </p>
              <HStack gap="4" marginTop="4">
                <a
                  href="https://twitter.com/smc_cit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://abs.twimg.com/responsive-web/client-web/icon-svg.ea5ff4aa.svg"
                    alt="X"
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="https://www.instagram.com/smc.cit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://static.cdninstagram.com/rsrc.php/v4/yI/r/VsNE-OHk_8a.png"
                    alt="Instagram"
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="https://smc-cit.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                    <line x1="8" x2="16" y1="12" y2="12" />
                  </svg>
                </a>
              </HStack>
            </Block>
            {/* <Heading value="Ads" description="広告" />
            <budoux-ja>
              <div
                class={css({
                  display: "flex",
                  flexDir: { md: "row", base: "column" },
                  margin: 5,
                  gap: 4,
                  flexWrap: "wrap",
                  opacity: 0,
                  transform: "translateX(-10px)",
                })}
                onQVisible$={(e) => {
                  animate(
                    e.detail.target,
                    { opacity: 1, transform: "translateX(0px)" },
                    {
                      duration: 0.6,
                      delay: base_delay + 0.45,
                      easing: "ease-in-out",
                    },
                  );
                }}
              >
                <div>
                  <Nekoteru
                    class={css({
                      height: "500px",
                      width: "auto",
                    })}
                    alt="ネコテル ポスター"
                  />
                </div>
                <div>
                  <Nekoreru_menu
                    class={css({
                      height: "500px",
                      width: "auto",
                    })}
                    alt="ネコテル メニュー"
                  />
                </div>
              </div>
            </budoux-ja> */}
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Cyber </> Music vol.2 by Nekko Lab",
  meta: [
    {
      name: "description",
      content:
        '音楽と音楽が"まざる"、人と人が"まざる"、自由な音楽の空間へようこそ！\nCyber </> Music (サイバー ルート ミュージック) は、音楽とみんなが主役になれるDJイベントです。',
    },
  ],
};
