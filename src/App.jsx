import React from "react";
import {
  createBrowserRouter,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";

// LAYOUTS
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    // this parent component wraps around other components (the navbar)
    <Route path="/" element={<RootLayout />}>
      {/* index refers to the home page */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" />
        <Route path="contact" />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
