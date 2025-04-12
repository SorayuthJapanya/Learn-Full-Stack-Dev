import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { readData, updateData } from "../functions/Product";

const FormEditProduct = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    name: "",
    detail: "",
    price: "",
  });

  function handleNameChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    updateData(param.id, form)
      .then((res) => {
        console.log("Updated successfully");
        navigate('/');
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    loadData(param.id);
  }, []);

  const loadData = async (id) => {
    readData(id)
      .then((res) => {
        setData(res.data);
        setForm({
          name: res.data.name || "",
          detail: res.data.detail || "",
          price: res.data.price || "",
        });
      })
      .catch((error) => console.log(error));
  };

  console.log(data);

  return (
    <div className="flex flex-col w-full h-screen mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
        Edit Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto m-8 bg-slate-200 p-6 rounded-md shadow-xl"
      >
        <div className="mb-4 w-full flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-left mb-2 text-md font-medium text-gray-900 "
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleNameChange}
            className="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white"
            placeholder="EuroNN12345"
            value={form.name}
          />
        </div>
        <div className="mb-4 w-full flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-left mb-2 text-md font-medium text-gray-900 "
          >
            Product Detail
          </label>
          <input
            type="text"
            id="detail"
            onChange={handleNameChange}
            className="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white"
            placeholder="MSI"
            value={form.detail}
          />
        </div>
        <div className="mb-4 w-full flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-left mb-2 text-md font-medium text-gray-900 "
          >
            Product Price
          </label>
          <input
            type="text"
            id="price"
            onChange={handleNameChange}
            className="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white"
            placeholder="24990"
            value={form.price}
          />
        </div>
        <button
          type="submit"
          className="mt-6 block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-800 cursor-pointer text-md font-medium outlinenone"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormEditProduct;
