"use client";

import { useEffect, useState } from "react";

interface Product {
  Productid: number;
  Name: string;
  Unit: string;
  Description: string;
}
export default function Home() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch(
      "http://saptechno-001-site10.anytempurl.com/api/AjaxAPI/SelectproductMaster",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      },
    )
      .then((res) => res.json())
      .then((res: Product[]) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => {
        let images: string[] = [];
        let desc: any = {};

        try {
          images = item.Unit ? JSON.parse(item.Unit) : [];
          desc = item.Description ? JSON.parse(item.Description) : {};
        } catch (e) {}

        return (
          <div
            key={item.Productid}
            className="bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl transition "
          >
            {/* Image */}
            <img
              src={images?.[0] || "https://via.placeholder.com/300"}
              className="h-40 w-full object-cover rounded-md mb-2"
            />
            {/* Title */}
            <h2 className="text-lg font-bold">{item.Name}</h2>
            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {desc?.location || "No location"} • ₹{desc?.price || "N/A"}
            </p>
          </div>
        );
      })}
    </div>
  );
}
