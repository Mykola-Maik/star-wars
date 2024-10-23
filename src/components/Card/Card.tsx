import { Box, Paper, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import { Link } from "react-router-dom";

export const Card = () => {
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
        height: "490px",
        backgroundColor: "rgba(80, 95, 111, 1)",
      }}
    >
      <Box
        component={Link}
        to={`/hero/1`}
        sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      >
        <Box
          component="img"
          src="https://images.bauerhosting.com/legacy/empire-images/features/560ebc7b50e6c513721c309f/Ben%20Kenobi.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
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
          flexGrow: 1,
          py: 2,
          px: 1,
          gap: 1,
          color: theme.palette.common.white,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: "bold" }}>Rating</Typography>
        </Box>
        <Typography
          component={Link}
          to={`/hero/1`}
          variant="h6"
          sx={{
            color: theme.palette.common.white,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Hero name
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
          }}
        >
          Hero description
        </Typography>
      </Box>
    </Paper>
  );
};
