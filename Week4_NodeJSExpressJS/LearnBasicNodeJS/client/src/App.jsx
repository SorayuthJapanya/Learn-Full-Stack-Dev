import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormProduct from "./components/FormProduct";
import FormEditProduct from "./components/FormEditProduct";

const App = () => {
  const result = 3 * 3;

  return (
    <BrowserRouter>
      <main className="flex flex-col w-full h-screen items-center bg-slate-100">
        <div className="flex flex-col mx-auto max-w-[1140px] w-full text-center mt-16 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6 font-bold">
            Form CRUD
          </h1>
          <div>
            <Routes>
              <Route path="/" element={<FormProduct />}/>
              <Route path="/edit/:id" element={<FormEditProduct />}/>
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
