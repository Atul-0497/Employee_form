"use client";

type Props = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({ open, onConfirm, onCancel }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 🔥 DARK OVERLAY */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* 🔥 MODAL */}
      <div
        className="relative w-[340px] p-6 rounded-2xl
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        text-white animate-fadeIn"
      >
        {/* TITLE */}
        <h2 className="text-lg font-semibold mb-2">Confirm Delete</h2>

        {/* MESSAGE */}
        <p className="text-sm text-gray-200 mb-6">
          Are you sure you want to delete this employee?
        </p>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-white/30
            hover:bg-white/10 transition duration-200"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600
            transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
