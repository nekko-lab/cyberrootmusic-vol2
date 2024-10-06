import type { ListBlock } from "./listblock";
import type { DjEvent } from "./timeTable";

export const TimeLine: Array<DjEvent> = [
  { time: "11:15", dj: "chokozai", vj: "irumaru" },
  { time: "12:00", dj: "kaigara" },
  { time: "22:00", dj: "pantyetta" },
];

export const Attention: Array<ListBlock> = [
  { Content: "発光量が極端に多いものの使用はご遠慮ください。" },
  {
    Content: "過度に振り回す等、周りのお客様に迷惑になる行為はご遠慮ください。",
  },
];
