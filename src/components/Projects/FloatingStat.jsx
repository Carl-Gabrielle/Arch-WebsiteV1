export default function FloatingStat({
  label,
  value,
  className,
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <h4 className="mt-2 text-2xl font-light text-white">
        {value}
      </h4>
    </div>
  );
}