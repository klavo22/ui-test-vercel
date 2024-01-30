export interface Ruling {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: Votes;
}

export interface Votes {
  positive: number;
  negative: number;
}

export enum VoteType {
  Positive = "positive",
  Negative = "negative",
}

export type UpdateVotesFunction = (name: string, type: VoteType) => void;

export enum ViewMode {
  List = "List",
  Grid = "Grid",
}
