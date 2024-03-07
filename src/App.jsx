import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contacts from "./pages/contacts/contacts";
import Gallery from "./pages/gallery/gallery";
import NotFound from "./pages/notFound/notFound";
import Plans from "./pages/plans/plans";
import Trainers from "./pages/trainers/trainers";

export const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Contacts />
      <Gallery />
      <NotFound />
      <Plans />
      <Trainers />
    </div>
  );
};
