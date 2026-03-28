"use client";

import { FaCamera, FaUpload } from "react-icons/fa";

export default function ImageSection({ setValue, preview, setPreview }: any) {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      {/* 🔹 Profile Image */}
      <div>
        <label className="block text-sm mb-1 dark:text-white">
          Profile Image
        </label>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 bg-white/10">
          <FaCamera className="text-gray-400" />
          <input
            type="file"
            className="bg-transparent outline-none w-full text-sm w-full rounded px-2 py-1.5 text-sm bg-transparent text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none"
            onChange={(e: any) => {
              const file = e.target.files[0];
              setValue("profileImage", file);
            }}
          />
        </div>
      </div>

      {/* 🔹 Aadhaar Upload */}
      <div>
        <label className="block text-sm mb-1 dark:text-white">
          Aadhaar Upload
        </label>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 bg-white/10">
          <FaUpload className="text-gray-400" />
          <input
            type="file"
            className="bg-transparent outline-none w-full text-sm w-full rounded px-2 py-1.5 text-sm bg-transparent text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none"
            onChange={(e: any) => {
              const file = e.target.files[0];
              setValue("aadharFile", file);
            }}
          />
        </div>
      </div>

      {/* 🔹 PAN Upload */}
      <div>
        <label className="block text-sm mb-1 dark:text-white">PAN Upload</label>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 bg-white/10">
          <FaUpload className="text-gray-400" />
          <input
            type="file"
            className="bg-transparent outline-none w-full text-sm w-full rounded px-2 py-1.5 text-sm bg-transparent text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none"
            onChange={(e: any) => {
              const file = e.target.files[0];
              setValue("panFile", file);
            }}
          />
        </div>
      </div>

      {/* 🔥 Preview */}
      {preview && (
        <div className="col-span-3 flex gap-4 mt-2">
          <img
            src={preview}
            alt="Preview"
            className="h-20 w-20 rounded object-cover border"
          />
        </div>
      )}
    </div>
  );
}
