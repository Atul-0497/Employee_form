"use client";

import InputField from "@/src/components/ui/InputField";
import {
  FaMoneyBillAlt,
  FaIdCard,
  FaIdBadge,
  FaUniversity,
  FaKey,
  FaGlobe,
} from "react-icons/fa";

export default function OtherSection({ register, errors }: any) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <InputField
        placeholder="Salary"
        name="emp_salary"
        register={register}
        icon={FaMoneyBillAlt}
        error={errors.emp_salary}
      />
      <InputField
        placeholder="PAN Number"
        name="emp_pan"
        register={register}
        icon={FaIdCard}
        error={errors.emp_pan}
      />
      <InputField
        placeholder="Aadhar Number"
        name="emp_aadhar"
        register={register}
        icon={FaIdBadge}
        error={errors.emp_aadhar}
      />

      <InputField
        placeholder="Bank Account"
        name="emp_bankAccount"
        register={register}
        icon={FaUniversity}
        error={errors.emp_bankAccount}
      />
      <InputField
        placeholder="IFSC Code"
        name="emp_ifsc"
        register={register}
        icon={FaKey}
        error={errors.emp_ifsc}
      />
      <InputField
        placeholder="Country"
        name="emp_country"
        register={register}
        icon={FaGlobe}
        error={errors.emp_country}
      />
    </div>
  );
}
