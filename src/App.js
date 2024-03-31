import React, {Suspense } from "react";
import Home from "./pages/Home/Home";
import s from './scss/App.module.scss'
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Custom from "./pages/Custom/Custom";
import Notfound from "./pages/Notfound/Notfound";
import './i18n';
import Row from "./pages/Catalog/Row/Row";
function App() {
  return (
    <Suspense fallback={"Loading..."}>

    <div className={s.container}>
      <div className={s.contsmall}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />

            <Route path="*" element={<Notfound/>} />

          </Route>
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </div>
    </div>
    </Suspense>

  );
}

export default App;
