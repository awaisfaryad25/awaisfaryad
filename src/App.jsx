import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
