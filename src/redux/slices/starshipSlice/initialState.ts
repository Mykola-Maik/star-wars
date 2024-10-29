import type { Starship } from "@/types";

interface StarshipSliceState {
  starships: Starship[];
  isLoading: boolean;
  errors: string;
}

export const initialState: StarshipSliceState = {
  starships: [],
  isLoading: false,
  errors: "",
};
