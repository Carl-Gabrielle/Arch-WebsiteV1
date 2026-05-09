export default function Meta({
  label,
  value,
  className = "",
  valueClassName = "",
}) {
  return (
    <div className={`space-y-1 ${className}`.trim()}>
      <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
        {label}
      </p>
      <p className={`text-sm text-zinc-200 ${valueClassName}`.trim()}>{value}</p>
    </div>
  );
}
