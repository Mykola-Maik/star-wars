import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import { ROUTES } from "@/enums";
import { App } from "@/App";
import { HeroDetailsPage, ListPage } from "@/pages";

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
          <Suspense fallback={<div>Loading...</div>}>
            <ListPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.HERO_DETAILS,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HeroDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function RouterProvider() {
  return <Provider router={router} />;
}
