import Header from "./assets/components/Header/Header";
import Hero from "./assets/components/Hero/Hero";
import Benefits from "./assets/components/Benefits/Benefits";
import Categories from "./assets/components/Categories/Categories";
import Footer from "./assets/components/Footer/Footer";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Categories />
      </main>

      <Footer />
    </>
  );
}
