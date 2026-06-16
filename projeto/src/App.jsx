import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Servicos from "./pages/servicos";
import CorpoClinico from "./pages/CorpoClinico";
import QuemSomos from "./pages/quemSomos";
import Blog from "./pages/blog";
import Contato from "./pages/contato";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/corpo-clinico" element={<CorpoClinico />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;