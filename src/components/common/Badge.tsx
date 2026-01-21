const Badge = ({
  title,
  variant = "open",
}: {
  title: string;
  variant?: string;
}) => {
  const variants: Record<string, string> = {
    closed: "bg-gray-50 text-gray-600 inset-ring-gray-500/10",
    answered: "bg-green-50 text-green-700 inset-ring-green-600/20",
    open: "bg-indigo-50 text-indigo-700 inset-ring-indigo-700/10",
  };

  const variantClass = variants[variant] || variants.closed;

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring ${variantClass}`}
    >
      {title}
    </span>
  );
};

export default Badge;
