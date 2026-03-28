"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { employeeSchema } from "@/src/features/employee/types/employee.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import Section from "@/src/components/ui/Section";
import ConfirmModal from "@/src/components/ui/ConfirmModal";

import EmployeeSection from "./EmployeeSection";
import WorkSection from "./WorkSection";
import PersonalSection from "./PersonalSection";
import OtherSection from "./OtherSection";
import ImageSection from "./ImageSection";
import EmployeeTable from "./EmployeeTable";

export default function EmployeeForm() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = data;
      setEmployees(updated);
      setEditIndex(null);
      toast.success("Updated");
    } else {
      setEmployees([...employees, data]);
      toast.success("Added");
    }
    reset();
    setPreview(null);
  };

  const handleEdit = (index: number) => {
    const emp = employees[index];
    Object.keys(emp).forEach((key) => {
      setValue(key as any, emp[key]);
    });
    setEditIndex(index);
  };

  const confirmDelete = () => {
    if (deleteIndex === null) return;
    setEmployees(employees.filter((_, i) => i !== deleteIndex));
    setDeleteIndex(null);
  };

  return (
    <div className="min-h-screen transition bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      {/* FORM */}
      <div className="w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border dark:border-gray-700 rounded-lg p-4 shadow">
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Section title="Employee Details">
            <EmployeeSection
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
            />
          </Section>

          <Section title="Work Details">
            <WorkSection
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
            />
          </Section>

          <Section title="Personal Details">
            <PersonalSection register={register} errors={errors} />
          </Section>

          <Section title="Other Details">
            <OtherSection register={register} errors={errors} />
          </Section>

          <Section title="Profile Image">
            <ImageSection
              setValue={setValue}
              preview={preview}
              setPreview={setPreview}
            />
          </Section>

          {/* BUTTONS */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              type="submit"
              disabled={!isValid}
              className={`px-5 py-1.5 rounded text-sm text-white ${
                isValid
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {editIndex !== null ? "Update" : "Submit"}
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                setEditIndex(null);
                setPreview(null);
              }}
              className="px-5 py-1.5 rounded text-sm bg-red-500 hover:bg-red-600 text-white"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={(i: number) => setDeleteIndex(i)}
      />
      <ConfirmModal
        open={deleteIndex !== null}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteIndex(null)}
      />
    </div>
  );
}
