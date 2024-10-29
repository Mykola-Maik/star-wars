import { HeroGraph } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  getCurrentHeroFilmsRequest,
  getCurrentHeroRequest,
  getCurrentHeroStarshipsRequest,
  removeCurrentHero,
} from "@/redux/slices/currentHeroSlice/currentHeroSlice";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const HeroDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id = "12" } = useParams();
  const heroFilms =
    useAppSelector((state) => state.currentHeroSlice.hero?.films) || [];

  useEffect(() => {
    dispatch(getCurrentHeroRequest({ heroId: id }));
    dispatch(getCurrentHeroFilmsRequest({ heroId: id }));

    return () => {
      dispatch(removeCurrentHero());
    };
  }, []);

  useEffect(() => {
    if (heroFilms.length > 0) {
      dispatch(
        getCurrentHeroStarshipsRequest({ filmIds: heroFilms, heroId: id })
      );
    }
  }, [heroFilms, id]);

  return (
    <Box
      sx={{
        height: "75vh",
        width: "99vw",
      }}
    >
      <HeroGraph />
    </Box>
  );
};
