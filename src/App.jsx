// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <ScrollToHash />
          </Layout>
        }
      >
        <Route
          path="/"
          element={
            <>
              <section id="home" className="scroll-mt-28">
                <Hero />
              </section>

              <section id="projects" className="scroll-mt-28">
                <Projects />
              </section>

              <section id="tools" className="scroll-mt-28">
                <Tools />
              </section>

              <section id="contact" className="scroll-mt-28">
                <Contact />
              </section>

              <Footer />
            </>
          }
        />
      </Route>
    </Routes>
  );
}
