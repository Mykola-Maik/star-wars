import { Card } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAllHeroesRequest } from "@/redux/slices/heroSlice/heroSlice";
import { Box, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const itemsPerPage = 10;

export const ListPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const heroes = useAppSelector((state) => state.heroSlice.heroes) || [];
  const totalCount = useAppSelector((state) => state.heroSlice.totalCount);
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    dispatch(getAllHeroesRequest({ page: currentPage }));
  }, [currentPage]);

  useEffect(() => {
    const query: { [key: string]: string } = {};
    if (currentPage) query.page = String(currentPage);

    setSearchParams(query);
  }, [currentPage, setSearchParams]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
  };

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Grid container spacing={4} sx={{ mb: 8, flexGrow: 1 }}>
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <Grid
              key={hero.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card hero={hero} />
            </Grid>
          ))
        ) : (
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
            }}
          >
            <p>No movies found</p>
          </Grid>
        )}
      </Grid>

      <Grid container sx={{ width: "100%", alignSelf: "flex-end" }}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
