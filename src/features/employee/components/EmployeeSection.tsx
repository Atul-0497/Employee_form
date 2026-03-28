"use client";

import { FaUser, FaIdCard, FaVenusMars } from "react-icons/fa";
import InputField from "@/src/components/ui/InputField";
import Dropdown from "@/src/components/ui/Dropdown";

export default function EmployeeSection({
  register,
  errors,
  watch,
  setValue,
}: any) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <InputField
        placeholder="Employee Code"
        name="emp_code_x"
        register={register}
        icon={FaIdCard}
        error={errors.emp_code_x}
      />

      <InputField
        placeholder="First Name"
        name="emp_fname_x"
        register={register}
        icon={FaUser}
        error={errors.emp_fname_x}
      />

      <InputField
        placeholder="Last Name"
        name="emp_lname_x"
        register={register}
        icon={FaUser}
        error={errors.emp_lname_x}
      />

      <Dropdown
        label="Gender"
        hideLabel={true}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
        value={watch("gender")}
        onChange={(v: string) => setValue("gender", v)}
        error={errors.gender}
      />

      <InputField
        type="date"
        placeholder="DOB"
        name="emp_dob"
        register={register}
        icon={FaVenusMars}
        error={errors.emp_dob}
      />

      <InputField
        placeholder="Blood Group"
        name="emp_bloodGroup"
        register={register}
        icon={FaUser}
        error={errors.emp_bloodGroup}
      />
    </div>
  );
}
