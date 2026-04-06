"use client";

import { useState } from "react";

type VendorType = {
  name: string;
  email: string;
  number: string;
};

export default function VendorForm() {
  const [vendor, setVendor] = useState<VendorType>({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVendor(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Vendor ", vendor);
    alert("Vendor Saved Successfully ✅");
  };
  return (
    <div>
      <h3 className="font-bold mb-2">Add Vendor</h3>

      <input name="name" placeholder="Vendor Name" onChange={handleChange} className="border p-2 mb-2 w-full" />
      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 mb-2 w-full" />
      <input name="number" placeholder="Phone" onChange={handleChange} className="border p-2 mb-2 w-full" />

      <button onClick={handleSubmit} className="bg-green-500 text-white px-3 py-1 rounded">
        Save
      </button>
    </div>
  );
}