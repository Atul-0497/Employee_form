"use client";
import { useState } from "react";
export default function MiniForm() {
  const [form, setForm] = useState({
    empCode: "",
    firstName: "",
    lastName: "",
    department: "",
    email: "",
  });
  const [list, setList] = useState([]);
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      form.empCode === "" ||
      form.firstName === "" ||
      form.lastName === "" ||
      form.department === "" ||
      form.email === ""
    ) {
      alert("Please fill all fields");
      return;
    }
    const newList = [...list, form];
    setList(newList);
    setForm({
      empCode: "",
      firstName: "",
      lastName: "",
      department: "",
      email: "",
    });
  };
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Employee Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
          <input 
            name="empCode" placeholder="Employee Code" value={form.empCode} onChange={handleChange}className="border p-2 rounded"/>
          <input
            name="firstName"placeholder="First Name" value={form.firstName} onChange={handleChange}className="border p-2 rounded"/>
          <input
            name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange}className="border p-2 rounded"/>
          <input
            name="department"placeholder="Department"value={form.department} onChange={handleChange}className="border p-2 rounded"/>
          <input 
            name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 rounded col-span-2"/>
          <button
            type="submit" className="col-span-2 bg-blue-500 text-white py-2 rounded">Submit
          </button>
        </form>
        <div className="mt-6">
          {list.length > 0 && (
            <table className="w-full border mt-2 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">EmpCode</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Dept</th>
                  <th className="p-2 border">Email</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item: any, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{item.empCode}</td>
                    <td className="p-2 border">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="p-2 border">{item.department}</td>
                    <td className="p-2 border">{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}