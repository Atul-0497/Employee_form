import { z } from "zod";

export const employeeSchema = z.object({
  emp_code_x: z.string().min(1, "Employee Code is required"),

  emp_fname_x: z
    .string()
    .min(1, "First Name is required")
    .regex(/^[A-Za-z]+$/, "Only alphabets allowed"),

  emp_lname_x: z
    .string()
    .min(1, "Last Name is required")
    .regex(/^[A-Za-z]+$/, "Only alphabets allowed"),

  gender: z.string().min(1, "Select gender"),

  emp_dob: z.string().min(1, "Date of Birth is required"),

  emp_bloodGroup: z.string().optional(),

  department: z.string().min(1, "Department is required"),
  emp_designation: z.string().min(1, "Designation is required"),
  emp_joiningDate: z.string().min(1, "Joining date is required"),

  employmentType: z.string().min(1, "Select employment type"),

  emp_manager: z.string().optional(),
  emp_location: z.string().min(1, "Location is required"),

  emp_email: z.string().email("Enter valid email"),

  emp_mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian mobile number"),

  emp_altMobile: z.string().optional(),

  emp_address: z.string().min(1, "Address is required"),
  emp_city: z.string().min(1, "City is required"),
  emp_state: z.string().min(1, "State is required"),
  emp_country: z.string().min(1, "Country is required"),

  emp_salary: z.string().min(1, "Salary is required"),

  emp_pan: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
    .optional(),

  emp_aadhar: z
    .string()
    .regex(/^\d{12}$/, "Aadhaar must be 12 digits")
    .optional(),

  emp_bankAccount: z.string().optional(),

  emp_ifsc: z
    .string()
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code")
    .optional(),

  profileImage: z.any().optional(),
  panFile: z.any().optional(),
  aadharFile: z.any().optional(),
});
