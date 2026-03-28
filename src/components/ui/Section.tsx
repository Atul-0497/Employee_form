export default function Section({ title, children }: any) {
  return (
    <div className="mb-6">
      <h2 className="text-md font-semibold mb-3 text-gray-800 dark:text-white border-b pb-1">
        {title}
      </h2>
      {children}
    </div>
  );
}
