import Dropdown from "@/src/components/ui/Dropdown";
import InputField from "@/src/components/ui/InputField";
import {
  FaBuilding,
  FaSuitcase,
  FaCalendarAlt,
  FaUserTie,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function WorkSection({
  register,
  errors,
  watch,
  setValue,
}: any) {
  return (
    <div className="grid grid-cols-3 gap-4 font-sans text-sm">
      <Dropdown
        label="Department"
        options={[
          { label: "IT", value: "IT" },
          { label: "HR", value: "HR" },
        ]}
        value={watch("department")}
        hideLabel={true}
        onChange={(val: string) => setValue("department", val)}
        icon={FaBuilding}
      />

      <InputField
        placeholder="Designation"
        name="emp_designation"
        register={register}
        icon={FaSuitcase}
        error={errors.emp_designation}
      />

      <InputField
        type="date"
        placeholder="Joining Date"
        name="emp_joiningDate"
        register={register}
        icon={FaCalendarAlt}
        error={errors.emp_joiningDate}
      />

      <Dropdown
        label="Employment Type"
        hideLabel={true}
        options={[
          { label: "Full-time", value: "Full-time" },
          { label: "Contract", value: "Contract" },
        ]}
        value={watch("employmentType")}
        onChange={(val: string) => setValue("employmentType", val)}
        icon={FaSuitcase}
      />
      <InputField
        placeholder="Manager"
        name="emp_manager"
        register={register}
        icon={FaUserTie}
        error={errors.emp_manager}
      />

      <InputField
        placeholder="Location"
        name="emp_location"
        register={register}
        icon={FaMapMarkerAlt}
        error={errors.emp_location}
      />
    </div>
  );
}
