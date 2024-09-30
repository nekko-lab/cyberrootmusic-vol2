type DjEvent = {
  time: string;
  dj: string;
  vj?: string;
};

type Timeline = {
  events: Array<DjEvent>;
};
