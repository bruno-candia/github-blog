import { DefaultLayout } from "./layout/DefaultLayout";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";

export const pages = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Blog />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
];
