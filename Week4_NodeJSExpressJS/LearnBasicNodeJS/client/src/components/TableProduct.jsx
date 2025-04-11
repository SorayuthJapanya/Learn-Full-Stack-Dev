import React from "react";
import { Link } from "react-router-dom";

const TableProduct = (props) => {
  const { data, handleRemove, handleSubmit, handleNameChange } = props;

  return (
    <div className="relative overflow-x-auto mx-8 my-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs uppercase bg-gray-700 text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Detail
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="py-3 text-center">
              Edit
            </th>
            <th scope="col" className="py-3 text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((items, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{items.name}</td>
                    <td className="px-6 py-4">{items.detail}</td>
                    <td className="px-6 py-4">${items.price}</td>
                    <td className="text-center">
                      <Link
                        to={"/edit/" + items._id}
                      >
                        <i className="fa-solid fa-pen-to-square text-xl text-green-800 cursor-pointer"></i>
                      </Link>
                    </td>
                    <td
                      onClick={() => handleRemove(items._id)}
                      className="text-center"
                    >
                      <i className="fa-solid fa-trash text-xl text-red-800 cursor-pointer"></i>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
