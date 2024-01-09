import { lazy, Suspense } from "react";

import Loading from "./components/Loading";
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Items = lazy(() => import("./components/Items"));
const Restaurant = lazy(() => import("./components/Restaurant"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Sales = lazy(() => import("./components/Sales"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <Items />
        <Sales />
        <Restaurant />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
