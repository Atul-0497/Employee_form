export default function EmployeeTable({ employees, onEdit, onDelete }: any) {
  return (
    <div
      className="w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 
    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
    border dark:border-gray-700 rounded-lg p-4 mt-4 shadow"
    >
      <table className="w-full text-sm">
        <thead className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
          <tr>
            <th className="p-2 text-left">EMP Code</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Dept</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Mobile</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp: any, i: number) => (
            <tr
              key={i}
              className="border-b border-gray-300 dark:border-gray-700 
              hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <td className="p-2 text-gray-800 dark:text-gray-200">
                {emp.emp_code_x}
              </td>

              <td className="p-2 text-gray-800 dark:text-gray-200">
                {emp.emp_fname_x} {emp.emp_lname_x}
              </td>

              <td className="p-2 text-gray-800 dark:text-gray-200">
                {emp.department}
              </td>

              <td className="p-2 text-gray-800 dark:text-gray-200">
                {emp.emp_email}
              </td>

              <td className="p-2 text-gray-800 dark:text-gray-200">
                {emp.emp_mobile}
              </td>

              <td className="p-2 flex gap-2">
                <button
                  onClick={() => onEdit(i)}
                  className="bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded text-xs"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(i)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
