import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contacts from "./pages/contacts/contacts";
import Gallery from "./pages/gallery/gallery";
import NotFound from "./pages/notFound/notFound";
import Plans from "./pages/plans/plans";
import Trainers from "./pages/trainers/trainers";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
