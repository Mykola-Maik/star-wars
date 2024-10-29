import type { Film } from "@/types";

interface FilmSliceState {
  films: Film[];
  isLoading: boolean;
  errors: string;
}

export const initialState: FilmSliceState = {
  films: [],
  isLoading: false,
  errors: "",
};
