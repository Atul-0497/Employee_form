"use client";

import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";

type Option = { label: string; value: string };

type Props = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  hideLabel?: boolean;
  icon?: IconType;
  error?: any;
};

export default function Dropdown({
  options,
  value,
  onChange,
  label,
  hideLabel = false,
  icon,
  error,
}: Props) {
  const Icon = icon as IconType | undefined;
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (!open) setHighlight(null);
  }, [open]);

  const display = () => {
    const sel = options.find((o) => o.value === value);
    if (sel) return sel.label;
    return label ? `Select ${label}` : "Select";
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      setHighlight(0);
      return;
    }
    if (!open) return;
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowDown")
      setHighlight((h) =>
        h === null ? 0 : Math.min(options.length - 1, h + 1),
      );
    if (e.key === "ArrowUp")
      setHighlight((h) =>
        h === null ? options.length - 1 : Math.max(0, h - 1),
      );
    if (e.key === "Enter" && highlight !== null) {
      const opt = options[highlight];
      onChange?.(opt.value);
      setOpen(false);
    }
  };

  return (
    <div>
      {!hideLabel && label && (
        <div className="text-xs mb-1 font-medium">{label}</div>
      )}

      <div ref={containerRef} className={`relative`}>
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          onKeyDown={onKey}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${error ? "border-red-500" : "border-gray-600"} bg-white/10 w-full text-left backdrop-blur-md`}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {Icon && <Icon className="text-gray-400 text-sm" />}
          <span
            className={`flex-1 text-sm ${value ? "text-gray-800 dark:text-gray-200" : "text-gray-400 dark:text-gray-500"}`}
          >
            {display()}
          </span>
          <svg
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <ul
            role="listbox"
            tabIndex={-1}
            className="absolute z-50 mt-1 w-full bg-white/90 dark:bg-gray-800 rounded shadow-lg max-h-64 overflow-auto py-1"
          >
            {options.map((opt, idx) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                onMouseEnter={() => setHighlight(idx)}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className={`px-3 py-2 cursor-pointer text-sm ${highlight === idx ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"} text-gray-800 dark:text-gray-200`}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <p className="text-red-400 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
