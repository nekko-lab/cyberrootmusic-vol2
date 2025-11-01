<img align="right" src="./public/favicon.png" alt="favicon.png" title="favicon.png" width="100px" height="100px">

# Cyber </> Music vol.2 in 第 76 回 津田沼祭 Web page

## Cyber </> Music vol.2 (Cyber Root Music vol.2)

😎 音楽と​音楽が​"まざる​"、​人と​人が​"まざる​"、​自由な​音楽の​空間へようこそ！​ 😎  
Cyber </> Music (サイバー ルート ミュージック) は、​音楽と​観客が​主役に​なれる​DJイベントです。  
体を​解放して​音楽と​ひとつに​なれる、​そんな​空間を​目指しています。  
グルーブに​乗って​自由な​ムーブメントで​踊ろう！  

### [Web page](https://numasai2025.nekko-lab.dev/dj/)

<img align="center" src="./public/og.png" alt="og.png" title="og.png" width="100%" height="100%">

## Develop Stack

| ツール | バージョン | 概要 |
|--------|-----------|------|
| Node.js | v25.0.0 | JavaScript実行環境 |
| npm | 10.9.2 | パッケージマネージャー |
| Qwik | ^1.8.0 | フロントエンドフレームワーク |
| Qwik City | ^1.8.0 | ファイルベースルーティング |
| Vite | ^5.4.8 | ビルドツール・開発サーバー |
| TypeScript | 5.4.5 | 型付きJavaScript |
| Panda CSS | ^0.36.1 | CSSフレームワーク |

## Product Stack

| ツール | バージョン | 概要 |
|--------|-----------|------|
| nginx | 1.29.2 |  |
| npm | v11.6.2 |  |
| Node.js | 25.0.0 |  |

## Libraries

- [Granim.js](https://sarcadass.github.io/granim.js/index.html/)
- [Vanta.js](https://www.vantajs.com/)

## Start dev server

```shell
npm install
npm run dev
```

## Static Site Generator (Node.js)

1. Panda CSSのstyle systemを生成（初回または設定変更時）

    ```shell
    npx panda codegen
    ```

2. クライアントビルド

    ```shell
    npm run build.client
    ```

3. サーバービルド

    ```shell
    npm run build.server
    ```

## Build image

```shell
docker build -f container/Dockerfile -t numasai2025-crm . 
```

## Run container

```shell
docker run -d -p 80:8080 numasai2025-crm
```
