import { navItems } from "./navItems";

export default function DesktopNav() {
  return (
    <>
      <ul className="hidden items-center gap-9 font-['Manrope'] text-[0.75rem] font-medium tracking-[0.22em] uppercase text-stone-600 md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="relative pb-1 transition-colors duration-300 hover:text-stone-950 after:absolute after:-bottom-[2px] after:left-0 after:h-px after:w-0 after:bg-[#b08a54] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden items-center border border-stone-900 bg-stone-900 px-5 py-2 font-['Manrope'] text-[0.68rem] tracking-[0.2em] text-stone-50 uppercase transition-all duration-300 hover:bg-transparent hover:text-stone-900 md:inline-flex"
      >
        Book Consultation
      </a>
    </>
  );
}