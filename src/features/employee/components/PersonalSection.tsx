"use client";

import InputField from "@/src/components/ui/InputField";
import {
  FaEnvelope,
  FaPhone,
  FaMobileAlt,
  FaHome,
  FaCity,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function PersonalSection({ register, errors }: any) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <InputField
        placeholder="Email"
        name="emp_email"
        register={register}
        icon={FaEnvelope}
        error={errors.emp_email}
      />
      <InputField
        placeholder="Mobile"
        name="emp_mobile"
        register={register}
        icon={FaPhone}
        error={errors.emp_mobile}
      />
      <InputField
        placeholder="Alternate Mobile"
        name="emp_altMobile"
        register={register}
        icon={FaMobileAlt}
        error={errors.emp_altMobile}
      />

      <InputField
        placeholder="Address"
        name="emp_address"
        register={register}
        icon={FaHome}
        error={errors.emp_address}
      />
      <InputField
        placeholder="City"
        name="emp_city"
        register={register}
        icon={FaCity}
        error={errors.emp_city}
      />
      <InputField
        placeholder="State"
        name="emp_state"
        register={register}
        icon={FaMapMarkedAlt}
        error={errors.emp_state}
      />
    </div>
  );
}
