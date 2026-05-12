type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-sky-400 to-indigo-500 text-white hover:opacity-90",

    secondary:
      "border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800",
  };

  return (
    <button
      className={`rounded-2xl px-6 py-3 font-medium transition duration-300 hover:scale-[1.02] ${styles[variant]}`}
    >
      {text}
    </button>
  );
}