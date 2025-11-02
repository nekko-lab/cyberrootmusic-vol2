import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  // const loc = useLocation();

  // OG画像の完全なURLを構築
  const siteUrl = "https://numasai2025.nekko-lab.dev/dj-live/";
  const ogImageUrl = `${siteUrl}og.png`;

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={siteUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      {head.meta.map((m) => {
        // OG画像のURLを動的に置き換え
        if (m.property === "og:image" || m.name === "twitter:image") {
          return <meta key={m.key} {...m} content={ogImageUrl} />;
        }
        return <meta key={m.key} {...m} />;
      })}

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
