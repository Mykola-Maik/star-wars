import { Card } from "@/components";
import { Box, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const ListPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Grid container spacing={4} sx={{ mb: 8, flexGrow: 1 }}>
        {1 > 0 ? (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card />
          </Grid>
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
            count={10}
            page={1}
            onChange={() => {}}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
