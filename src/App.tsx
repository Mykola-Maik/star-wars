import { Box } from "@mui/material";
import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";
import theme from "@/styles/muiTheme";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { getAllFilmsRequest } from "@/redux/slices/filmSlice/filmSlice";
import { getAllStarshipsRequest } from "@/redux/slices/starshipSlice/starshipSlice";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFilmsRequest());
    dispatch(getAllStarshipsRequest());
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: "10px 15px",
          backgroundColor: theme.palette.common.white,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
