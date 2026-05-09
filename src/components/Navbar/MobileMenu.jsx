import { navItems } from "./navItems";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`overflow-hidden border-t border-stone-300/70 bg-[#f7f4ee] transition-all duration-300 md:hidden ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <ul className="px-6 py-4 font-['Manrope'] text-[0.72rem] tracking-[0.22em] uppercase text-stone-700">
        {navItems.map((item) => (
          <li key={`mobile-${item.href}`}>
            <a
              href={item.href}
              onClick={onClose}
              className="block border-b border-stone-200 py-3 transition-colors duration-300 hover:text-stone-950"
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="pt-4">
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex border border-stone-900 px-4 py-2 text-[0.68rem] text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-stone-50"
          >
            Book Consultation
          </a>
        </li>
      </ul>
    </div>
  );
}