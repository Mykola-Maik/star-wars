import { Film, Hero, Starship } from "@/types";

interface CurrentHeroSliceState {
  hero: Hero | null;
  films: Film[];
  starships: Starship[];
  isLoading: boolean;
  errors: string;
}

export const initialState: CurrentHeroSliceState = {
  hero: null,
  films: [],
  starships: [],
  isLoading: false,
  errors: "",
};
