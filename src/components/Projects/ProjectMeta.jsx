export default function ProjectMeta({
  label,
  value,
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
        {label}
      </p>

      <p className="mt-2 text-sm leading-relaxed text-zinc-200 whitespace-pre-line break-words">
        {Array.isArray(value) ? value.join("\n") : value}
      </p>
    </div>
  );
}