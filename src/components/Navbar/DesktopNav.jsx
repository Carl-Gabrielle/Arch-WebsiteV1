import { navItems } from "./navItems";

export default function DesktopNav() {
  return (
    <>
      <ul className="hidden md:flex items-center 
        gap-4 lg:gap-8
        font-['Manrope']
        text-[0.62rem] lg:text-[0.75rem]
        font-medium
        tracking-[0.14em] lg:tracking-[0.22em]
        uppercase
        text-stone-600"
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="relative pb-1 whitespace-nowrap transition-colors duration-300 hover:text-stone-950 after:absolute after:-bottom-[2px] after:left-0 after:h-px after:w-0 after:bg-[#b08a54] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:inline-flex items-center
          border border-stone-900 bg-stone-900
          px-3 lg:px-5
          py-2
          font-['Manrope']
          text-[0.58rem] lg:text-[0.68rem]
          tracking-[0.12em] lg:tracking-[0.2em]
          text-stone-50 uppercase
          whitespace-nowrap
          transition-all duration-300
          hover:bg-transparent hover:text-stone-900"
      >
        Book Consultation
      </a>
    </>
  );
}