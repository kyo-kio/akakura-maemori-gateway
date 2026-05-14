import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import { SelectPage, MaemoriPage, AkakuraPage } from "./pages/MogamiPages";
import {
  NewsPage,
  SlopePage,
  PricePage,
  FoodsPage,
  AccessPage,
} from "./pages/AkakuraSubPages";

function NotFound() {
  return (
    <div style={{ padding: 40, textAlign: "center", color: "#fff", background: "#0a0a0c", minHeight: "100vh" }}>
      <h1>404</h1>
      <p>Page not found</p>
      <a href="#/" style={{ color: "#fff" }}>← Home</a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/maemori" element={<MaemoriPage />} />
        <Route path="/akakura" element={<AkakuraPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/slope" element={<SlopePage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/foods" element={<FoodsPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
