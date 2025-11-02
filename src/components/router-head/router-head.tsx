import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  // const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href="https://numasai25.nekko-lab.dev/dj-live/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Nekko Lab 千葉工業大学 津田沼際 76th | DJ Live イベント開催中！最新の音楽とテクノロジーが融合するライブパフォーマンスをお楽しみください。"
      />
      <link rel="icon" type="image/png" href="favicon.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Inter:ital,opsz,wght@0,14..32,900;1,14..32,900&family=Libre+Barcode+39+Extended&family=Zen+Kaku+Gothic+New:wght@900&display=swap"
        rel="stylesheet"
      />
      <meta property="og:site_name" content="Nekko Lab" />
      <meta
        property="og:title"
        content="Cyber </> Music vol.2 in 津田沼際 76th | Produced by Nekko Lab"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://numasai25.nekko-lab.dev/dj-live/"
      />
      <meta
        property="og:image"
        content="https://numasai25.nekko-lab.dev/dj-live/og.png"
      />
      <meta
        property="og:description"
        content='Cyber </> Music vol.2 in 津田沼際 76th | 音楽と音楽が"まざる"、人と人が"まざる"、自由な音楽の空間へようこそ！'
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nekko_lab" />
      <meta
        name="twitter:title"
        content="Cyber </> Music vol.2 in 津田沼際 76th | produced by Nekko Lab"
      />
      <meta
        name="twitter:description"
        content='Cyber </> Music vol.2 in 津田沼際 76th | 音楽と音楽が"まざる"、人と人が"まざる"、自由な音楽の空間へようこそ！'
      />
      <meta
        name="twitter:image"
        content="https://numasai2025.nekko-lab.dev/dj-live/og.png"
      />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
