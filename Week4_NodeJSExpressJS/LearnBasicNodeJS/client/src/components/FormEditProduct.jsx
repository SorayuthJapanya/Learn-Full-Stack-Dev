import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { readData, updateData } from "../functions/Product";

const FormEditProduct = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    name: "",
    detail: "",
    price: "",
    file: "",
  });
  const [fileOld, setFileOld] = useState(null);

  function handleChange(e) {
    const { id, value, files } = e.target;

    if (id === "file") {
      if (files && files[0]) {
        console.log("Selected file:", {
          name: files[0].name,
          size: files[0].size,
          type: files[0].type,
        });
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [id]: id === "file" ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(form)
    try {
      const formWithImageData = new FormData();

      for (const key in form) {
        if (key === "file" && form[key]) {
          // console.log("Appending file:", form[key]);
          formWithImageData.append("file", form[key]); 
        } else if (form[key] !== null && form[key] !== undefined) {
          formWithImageData.append(key, form[key]);
        }
      }

      if (fileOld) {
        formWithImageData.append('fileold', fileOld); 
        // console.log(fileOld);
      }

      const res = await updateData(param.id, formWithImageData);
      console.log("Updated Succesfully!!")
      navigate('/')
    } catch (error) {
      console.error("Submit failed:", error);
    }
  }

  const loadData = async (id) => {
    readData(id)
      .then((res) => {
        setData(res.data);
        setForm({
          name: res.data.name || "",
          detail: res.data.detail || "",
          price: res.data.price || "",
        });
        setFileOld(res.data.file);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData(param.id);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
        Edit Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto m-8 bg-slate-200 p-6 rounded-md shadow-xl"
        encType="multipart/form-data"
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            className="block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white"
            placeholder="24990"
            value={form.price}
          />
        </div>
        {/* Image */}
        <div className="mb-4 w-full flex flex-col gap-2">
          <label
            htmlFor="name"
            className="block text-left mb-2 text-md font-medium text-gray-900 "
          >
            Product Image
          </label>
          <input
            type="file"
            id="file"
            onChange={handleChange}
            className="block w-full text-md  p-2.5 border rounded-lg cursor-pointer text-white focus:outline-none bg-gray-700 border-gray-600 "
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
