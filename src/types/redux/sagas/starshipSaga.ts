import { Starship } from "@/types";

export interface StarshipsObject {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}
