import type { ListBlock } from "./listblock";
import type { DjEvent } from "./timeTable";

export const TimeLine: Array<Array<DjEvent>> = [
  [
    { time: "11:00", dj: "chokozai" },
    { time: "11:50", dj: "flight" },
    { time: "14:00", dj: "kaigara" },
    { time: "14:50", dj: "flight" },
    { time: "15:30", dj: "chokozai" },
  ],
  [
    { time: "10:30", dj: "flight" },
    { time: "11:20", dj: "chokozai" },
    { time: "12:10", dj: "kaigara" },
    { time: "14:00", dj: "chokozai" },
    { time: "14:50", dj: "kaigara" },
    { time: "15:30", dj: "flight" },
  ],
  [
    { time: "10:30", dj: "kaigara" },
    { time: "11:20", dj: "flight" },
    { time: "12:10", dj: "chokozai" },
    { time: "14:00", dj: "flight" },
    { time: "14:50", dj: "chokozai" },
    { time: "15:30", dj: "kaigara" },
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
      "大学構内へのアルコール飲料の持ち込みは禁止です。また、酒気帯びでの入場もお控えください。",
  },
  {
    Content:
      "照明・スピーカー等の機材に十分ご注意ください。機材が破損した場合、弁償して頂きます。",
  },
  { Content: "公序良俗に反する行為は禁止です。" },
  { Content: "法律に抵触する行為は禁止です。" },
  {
    Content:
      "万が一他の観客と接触した場合は、必ず当事者同士で謝り合いましょう。",
  },
  { Content: "当日のDJは全員初心者です。優しくして頂けると幸いです^^;" },
];
