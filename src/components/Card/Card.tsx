import { Box, Paper, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import { Link } from "react-router-dom";
import type { Hero } from "@/types";

interface CardProps {
  hero: Hero;
}

export const Card = ({ hero }: CardProps) => {
  return (
    <Paper
      elevation={5}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <Box
        component={Link}
        to={`/hero/${hero.id}`}
        sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      >
        <Box
          component="img"
          src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
          alt={hero.name}
          sx={{
            display: "block",
            height: "300px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transition: "transform 0.3s ease",
              transform: "scale(1.1)",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          py: 2,
          px: 1,
          gap: 1,
          color: theme.palette.common.black,
        }}
      >
        <Typography
          component={Link}
          to={`/hero/${hero.id}`}
          variant="h6"
          sx={{
            maxWidth: "max-content",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {hero.name}
        </Typography>
      </Box>
    </Paper>
  );
};
