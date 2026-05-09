export default function MenuToggleButton({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
    >
      <span
        className={`h-0.5 w-6 bg-stone-900 transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
      />
      <span
        className={`h-0.5 w-6 bg-stone-900 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`h-0.5 w-6 bg-stone-900 transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
      />
    </button>
  );
}