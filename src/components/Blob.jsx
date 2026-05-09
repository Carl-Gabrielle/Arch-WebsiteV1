function Blob({ className }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-40 ${className}`}
    />
  );
}