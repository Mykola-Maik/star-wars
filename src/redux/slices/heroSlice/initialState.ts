import { Hero } from "@/types";

interface HeroSliceState {
  heroes: Hero[] | null;
  totalCount: number;
  isLoading: boolean;
  errors: string;
}

export const initialState: HeroSliceState = {
  heroes: [],
  totalCount: 0,
  isLoading: false,
  errors: "",
};
