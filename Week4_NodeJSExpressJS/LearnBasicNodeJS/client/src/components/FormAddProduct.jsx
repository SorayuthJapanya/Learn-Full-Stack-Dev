import React from "react";

const FormAddProduct = (props) => {
  const { handleSubmit, handleNameChange } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto m-8 bg-slate-200 p-6 rounded-md shadow-xl"
      encType="multipart/form-data"
    >

      {/* Name */}
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
        />
      </div>

      {/* Detail */}
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
        />
      </div>


      {/* Price */}
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
          onChange={handleNameChange}
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
  );
};

export default FormAddProduct;
