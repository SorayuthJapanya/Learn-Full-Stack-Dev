import React, { useState, useEffect } from "react";
import axios from "axios";
import FormAddProduct from "./FormAddProduct";
import TableProduct from "./TableProduct";
import { getData, deleteData, addData } from "../functions/Product";

const FormProduct = () => {
  useEffect(() => {
    loadData();
  }, []);

  const [data, setData] = useState([]);
  const [form, setForm] = useState({});

  const loadData = async () => {
    getData()
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  function handleNameChange(e) {
    if (e.target.id === "file") {
      setForm({
        ...form,
        [e.target.id]: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.id]: e.target.value,
      });
    }
  }

  async function handleRemove(id) {
    deleteData(id)
      .then((res) => loadData())
      .catch((error) => console.log(error));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formWithImageData = new FormData();

      for (const key in form) {
        formWithImageData.append(key, form[key]);
      }

      const res = await addData(formWithImageData);
      console.log(res.data);
      loadData();
    } catch (error) {
      console.error("Submit failed:", error);
    }
  }

  // console.log(form);

  return (
    <section className="flex flex-col my-8 max-w-[1140px] w-full ">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4 font-semibold">
        Form Product
      </h2>

      {/* Form Create */}
      <FormAddProduct
        form={form}
        handleNameChange={handleNameChange}
        handleSubmit={handleSubmit}
      />

      {/* Show Data on Table */}
      <TableProduct
        data={data}
        loadData={loadData}
        handleRemove={handleRemove}
      />
    </section>
  );
};

export default FormProduct;
