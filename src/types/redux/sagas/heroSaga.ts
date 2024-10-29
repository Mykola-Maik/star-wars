import type { Hero } from "@/types";

export interface HeroesObject {
  count: number;
  next: string | null;
  previous: string | null;
  results: Hero[];
}
