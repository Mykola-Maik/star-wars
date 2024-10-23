import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import { ROUTES } from "@/enums";
import { App } from "@/App";
// import HomePage from "@/pages/HomePage/HomePage";
// import MovieDetailsPage from "@/pages/MovieDetailsPage/MovieDetailsPage";

const router = createBrowserRouter([
  {
    path: ROUTES.LIST,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: ROUTES.LIST,
        element: (
          <Suspense fallback={<div>Loading...</div>}>List page</Suspense>
        ),
      },
      {
        path: ROUTES.HERO_DETAILS,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            Hero details page
          </Suspense>
        ),
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <Provider router={router} />;
};
