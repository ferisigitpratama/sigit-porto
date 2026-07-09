function Button({ children, variant = "primary" }) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30",

    secondary:
      "border border-slate-700 text-white hover:border-cyan-400 hover:bg-slate-900",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;