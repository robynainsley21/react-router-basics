import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  CareerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareersError";

// LAYOUTS
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    // this parent component wraps around other components (the navbar)
    <Route path="/" element={<RootLayout />}>
      {/* index refers to the home page */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={CareerDetailsLoader}
        />
      </Route>

      {/* 404 page */}
      {/* if none of the pages before match, the one below will be displayed */}
      <Route path="*" element={<NotFound />} />
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
