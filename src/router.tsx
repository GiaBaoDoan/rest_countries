import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Countries, Detail } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Countries />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
export default router;
