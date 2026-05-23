export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-7xl mx-auto px-4 ${className}`}>{children}</div>
  );
}

export function Badge({ text, color = "blue" }: { text: string; color?: string }) {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    teal: "bg-teal-100 text-teal-700",
    orange: "bg-orange-100 text-orange-700",
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[color] ?? colors.blue}`}>
      {text}
    </span>
  );
}