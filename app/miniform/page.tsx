"use client";
import { useState, ChangeEvent, FormEvent } from "react";

type Employee = {
  empCode: string;
  firstName: string;
  lastName: string;
  department: string;
  email: string;
};

export default function MiniForm() {
  const [form, setForm] = useState<Employee>({
    empCode: "",
    firstName: "",
    lastName: "",
    department: "",
    email: "",
  });
  const [list, setList] = useState<Employee[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(form).some(val => val === "")) {
      alert("Please fill all fields");
      return;
    }
    setList(prev => [...prev, form]);
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
        <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Employee Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
          <input name="empCode" placeholder="Employee Code" value={form.empCode} onChange={handleChange} className="border p-2 rounded text-black dark:text-white" />
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-2 rounded text-black dark:text-white" />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-2 rounded text-black dark:text-white" />
          <input name="department" placeholder="Department" value={form.department} onChange={handleChange} className="border p-2 rounded text-black dark:text-white" />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 rounded text-black dark:text-white col-span-2" />
          <button type="submit" className="col-span-2 bg-blue-500 text-white py-2 rounded">
            Submit
          </button>
        </form>

        <div className="mt-6">
          {list.length > 0 && (
            <table className="w-full border mt-2 text-sm">
              <thead>
                <tr className="bg-gray-200 ">
                  <th className="p-2 border text-black dark:text-black ">EmpCode</th>
                  <th className="p-2 border text-black dark:text-black">Name</th>
                  <th className="p-2 border text-black dark:text-black">Dept</th>
                  <th className="p-2 border text-black dark:text-black">Email</th>
                </tr>
              </thead>

              <tbody>
                {list.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border text-black dark:text-white">{item.empCode}</td>
                    <td className="p-2 border text-black dark:text-white">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="p-2 border text-black dark:text-white">{item.department}</td>
                    <td className="p-2 border text-black dark:text-white">{item.email}</td>
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