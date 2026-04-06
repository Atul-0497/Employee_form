"use client";

import { useState } from "react";
import VendorForm from "./VendorForm";

type ProductFormType = {
  ProductOwner: string;
  ProductName: string;
  ProductCode: string;
  VendorName: string;
  Manufacturer: string;
  ProductActive: boolean;
  ProductCategory: string;
  SalesStartDate: string;
  SalesEndDate: string;
  SupportStartDate: string;
  SupportEndDate: string;
  UnitPrice: number;
  Tax: number;
  CommissionRate: number;
  Taxable: boolean;
  UsageUnit: string;
  QuantityInStock: number;
  QtyOrdered: number;
  ReorderLevel: number;
  QuantityInDemand: number;
  Handler: string;
  Description: string;
};

export default function ProductForm() {
  const [form, setForm] = useState<ProductFormType>({
    ProductOwner: "",
    ProductName: "",
    ProductCode: "",
    VendorName: "",
    Manufacturer: "",
    ProductActive: false,
    ProductCategory: "",
    SalesStartDate: "",
    SalesEndDate: "",
    SupportStartDate: "",
    SupportEndDate: "",
    UnitPrice: 0,
    Tax: 0,
    CommissionRate: 0,
    Taxable: false,
    UsageUnit: "",
    QuantityInStock: 0,
    QtyOrdered: 0,
    ReorderLevel: 0,
    QuantityInDemand: 0,
    Handler: "",
    Description: "",
  });

  const [showVendor, setShowVendor] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm(prev => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.ProductName || !form.ProductCode) {
      alert("Product Name & Code required");
      return;
    }

    console.log("FINAL DATA ", form);
    alert("Product Saved Successfully ✅");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-900 rounded-xl shadow">

      <h2 className="text-2xl font-bold text-black dark:text-white">
        Product Master
      </h2>

      {/* Product Info */}
      <div className="border p-4 rounded-xl space-y-3">
        <h3 className="font-semibold text-lg">Product Information</h3>

        <div className="grid grid-cols-2 gap-3">
          <input name="ProductOwner" placeholder="Product Owner" onChange={handleChange} className="border p-2 rounded w-full" />
          <input name="ProductCategory" placeholder="Category" onChange={handleChange} className="border p-2 rounded w-full" />

          <input name="ProductName" placeholder="Product Name" onChange={handleChange} className="border p-2 rounded w-full" />
          <input name="ProductCode" placeholder="Product Code" onChange={handleChange} className="border p-2 rounded w-full" />

          <div className="flex gap-2">
            <input name="VendorName" placeholder="Vendor Name" onChange={handleChange} className="border p-2 rounded w-full" />
            <button type="button" onClick={() => setShowVendor(true)} className="bg-gray-500 text-white px-2 rounded">
              +
            </button>
          </div>

          <input name="Manufacturer" placeholder="Manufacturer" onChange={handleChange} className="border p-2 rounded w-full" />

          <input type="date" name="SalesStartDate" onChange={handleChange} className="border p-2 rounded w-full" />
          <input type="date" name="SalesEndDate" onChange={handleChange} className="border p-2 rounded w-full" />

          <input type="date" name="SupportStartDate" onChange={handleChange} className="border p-2 rounded w-full" />
          <input type="date" name="SupportEndDate" onChange={handleChange} className="border p-2 rounded w-full" />

          <label className="col-span-2 text-black dark:text-white">
            <input type="checkbox" name="ProductActive" onChange={handleChange} /> Active
          </label>
        </div>
      </div>

      {/* Price Info */}
      <div className="border p-4 rounded-xl space-y-3">
        <h3 className="font-semibold text-lg">Price Information</h3>

        <div className="grid grid-cols-2 gap-3">
          <input type="number" name="UnitPrice" placeholder="Unit Price" onChange={handleChange} className="border p-2 rounded w-full" />
          <input type="number" name="Tax" placeholder="Tax" onChange={handleChange} className="border p-2 rounded w-full" />

          <input type="number" name="CommissionRate" placeholder="Commission Rate" onChange={handleChange} className="border p-2 rounded w-full" />

          <label className="text-black dark:text-white">
            <input type="checkbox" name="Taxable" onChange={handleChange} /> Taxable
          </label>
        </div>
      </div>

      {/* Stock Info */}
      <div className="border p-4 rounded-xl space-y-3">
        <h3 className="font-semibold text-lg">Stock Information</h3>

        <div className="grid grid-cols-2 gap-3">
          <input name="UsageUnit" placeholder="Usage Unit" onChange={handleChange} className="border p-2 rounded w-full" />
          <input type="number" name="QuantityInStock" placeholder="Stock" onChange={handleChange} className="border p-2 rounded w-full" />

          <input type="number" name="QtyOrdered" placeholder="Qty Ordered" onChange={handleChange} className="border p-2 rounded w-full" />
          <input type="number" name="ReorderLevel" placeholder="Reorder Level" onChange={handleChange} className="border p-2 rounded w-full" />

          <input type="number" name="QuantityInDemand" placeholder="Demand Qty" onChange={handleChange} className="border p-2 rounded w-full" />
          <input name="Handler" placeholder="Handler" onChange={handleChange} className="border p-2 rounded w-full" />
        </div>
      </div>

      {/* Description */}
      <div className="border p-4 rounded-xl">
        <h3 className="font-semibold text-lg mb-2">Description</h3>
        <textarea name="Description" placeholder="Description" onChange={handleChange} className="border p-2 rounded w-full" />
      </div>

      {/* Submit */}
      <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded">
        Submit
      </button>

      {/* Vendor Modal */}
      {showVendor && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-xl w-[300px]">
            <VendorForm />
            <button onClick={() => setShowVendor(false)} className="mt-2 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}