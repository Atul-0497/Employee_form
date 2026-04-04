"use client";

import { useState } from "react";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(3);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("New");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // 🔥 Category-wise description
    let descriptionData: any = { title };

    if (categoryId === 1) {
      descriptionData = { title, location, price, description: desc };
    }

    if (categoryId === 2) {
      descriptionData = { title, location, price, brand, model };
    }

    if (categoryId === 3) {
      descriptionData = { title, price, brand, model, condition };
    }

    if (categoryId === 4) {
      descriptionData = { title, location, description: desc };
    }

    // ✅ Final object (ONLY required fields)
    const product = {
      Productid: 0,
      Name: name,
      Unit: "", // images blank
      CategoryId: categoryId,
      Createdate: new Date().toISOString(),
      IsActive: true,
      Description: JSON.stringify(descriptionData),
    };

    console.clear();
    console.log("FINAL OBJECT 👉", JSON.stringify(product, null, 2));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-3"
      >
        <h2 className="text-lg font-bold text-center">Add Product</h2>

        {/* Name */}
        <input
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Category */}
        <select
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          <option value={1}>Property</option>
          <option value={2}>Vehicle</option>
          <option value={3}>Electronics</option>
          <option value={4}>Services</option>
        </select>

        {/* Title */}
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Location */}
        {(categoryId === 1 || categoryId === 2 || categoryId === 4) && (
          <input
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        )}

        {/* Price */}
        {categoryId !== 4 && (
          <input
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
          />
        )}

        {/* Description */}
        {(categoryId === 1 || categoryId === 4) && (
          <textarea
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 border rounded"
          />
        )}

        {/* Brand + Model */}
        {(categoryId === 2 || categoryId === 3) && (
          <>
            <input
              placeholder="Brand"
              onChange={(e) => setBrand(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              placeholder="Model"
              onChange={(e) => setModel(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </>
        )}

        {/* Condition (Electronics only) */}
        {categoryId === 3 && (
          <select
            onChange={(e) => setCondition(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading
              ? "bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}