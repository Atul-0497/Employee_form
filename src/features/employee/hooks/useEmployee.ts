import { useState } from "react";
import toast from "react-hot-toast";

export function useEmployee() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const addOrUpdate = (data: any) => {
    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = data;
      setEmployees(updated);
      setEditIndex(null);
      toast.success("Updated ✅");
    } else {
      setEmployees([...employees, data]);
      toast.success("Added 🎉");
    }
  };

  const handleDelete = () => {
    if (deleteIndex === null) return;

    setEmployees(employees.filter((_, i) => i !== deleteIndex));
    setDeleteIndex(null);

    toast.error("Deleted ❌");
  };

  return {
    employees,
    editIndex,
    deleteIndex,
    setDeleteIndex,
    setEditIndex,
    addOrUpdate,
    handleDelete,
  };
}
