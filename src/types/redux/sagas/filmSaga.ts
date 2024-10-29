import { Film } from "@/types";

export interface FilmsObject {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}
