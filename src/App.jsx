import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
