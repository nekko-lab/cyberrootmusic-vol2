import type { ListBlock } from "./listblock";
import type { DjEvent } from "./timeTable";

export const TimeLine: Array<Array<DjEvent>> = [
  [
    { time: "10:30", dj: "kaigara Project SEKAI" },
    { time: "11:20", dj: "flight Orangestar DJ" },
    { time: "12:10", dj: "cyokozai House" },
    { time: "14:00", dj: "flight flightDJ" },
    { time: "14:50", dj: "cyokozai Sakanaction" },
    { time: "15:30", dj: "kaigara VOCALOID" },
  ],
  [
    { time: "10:30", dj: "flight flightDJ" },
    { time: "13:00", dj: "cyokozai Sakanaction" },
    { time: "14:00", dj: "kaigara VOCALOID" },
    { time: "14:40", dj: "cyokozai House" },
    { time: "15:30", dj: "kaigara Project SEKAI" },
    { time: "16:20", dj: "flight Orangestar DJ" },
  ],
  [
    { time: "10:30", dj: "kaigara Project SEKAI" },
    { time: "11:20", dj: "flight add DJ" },
    { time: "12:10", dj: "cyokozai Sakanaction" },
    { time: "14:00", dj: "kaigara VOCALOID" },
    { time: "14:50", dj: "flight Orangestar DJ" },
    { time: "15:30", dj: "cyokozai House" },
  ],
];

export const Attention: Array<ListBlock> = [
  { Content: "発光量が極端に多いものの使用はご遠慮ください。" },
  {
    Content: "過度に振り回す等、周りのお客様に迷惑になる行為はご遠慮ください。",
  },
];

export const Caution: Array<ListBlock> = [
  {
    Content:
      "会場の教室外では騒がないようお願いします。他団体や他のお客様へのご迷惑となります。",
  },
  {
    Content:
      "会場は通常の照明を落として営業しております。配線の都合上、床上をケーブルが通っている箇所がございますので、足元には十分ご注意ください。",
  },
  {
    Content:
      "照明・スピーカー等の機材に十分ご注意ください。機材が破損した場合、弁償して頂きます。",
  },
  {
    Content:
      "万が一他の観客と接触した場合は、必ず当事者同士で謝り合いましょう。",
  },
  {
    Content:
      "大学内で購入した酒類を含む飲食物の持ち込みは可能です。万が一、飲食物を落としたりこぼしてしまった場合は、速やかに係員にご連絡いただき、清掃にご協力をお願いいたします。",
  },
  { Content: "公序良俗に反する行為は禁止です。" },
  { Content: "法律に抵触する行為は禁止です。" },
  { Content: "当日のDJは全員初心者です。優しくして頂けると幸いです^^;" },
  {
    Content:
      "もし、途中でDJの音源が止まったら、それは乾杯の合図です（笑）皆さん一緒に乾杯しましょう！",
  },
];
