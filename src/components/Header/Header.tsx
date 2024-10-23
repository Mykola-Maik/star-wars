import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { ROUTES } from "@/enums/routes/Routes";
import { Link } from "react-router-dom";
import theme from "@/styles/muiTheme";

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.common.black }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", mr: 1 }}>
            <Box component={Link} to={ROUTES.LIST}>
              <Typography
                variant="h4"
                sx={{ color: theme.palette.common.white }}
              >
                Star Wars
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
