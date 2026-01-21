const Button = ({
  variant = "primary",
  onClick,
  children,
  disabled = false,
}: {
  variant?: "primary" | "open" | "answered" | "closed";
  onClick?: (e: any) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 hover:shadow-md ring-1 ring-indigo-500 shadow-indigo-200",
    open: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 ring-1 ring-emerald-600/20 rounded-full",
    answered:
      "bg-blue-50 text-blue-700 hover:bg-blue-100 ring-1 ring-blue-600/20 rounded-full",
    closed:
      "bg-slate-50 text-slate-600 hover:bg-slate-100 ring-1 ring-slate-600/20 rounded-full",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children || variant.charAt(0).toUpperCase() + variant.slice(1)}
    </button>
  );
};
export default Button;
