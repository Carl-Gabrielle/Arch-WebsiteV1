export default function ProjectMeta({
  label,
  value,
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
        {label}
      </p>

      <p className="mt-2 text-sm text-zinc-200">
        {value}
      </p>
    </div>
  );
}