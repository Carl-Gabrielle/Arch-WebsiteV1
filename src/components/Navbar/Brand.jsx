export default function Brand() {
  return (
    <div className="flex items-center gap-0">
      <img
        src="https://res.cloudinary.com/dcpjh6z5h/image/upload/Transparent_Black_Logo-01_b7jdzb"
        alt="A. Santa Cruz Logo"
        className="h-[4.3rem] w-[4.3rem] shrink-0 -my-3 object-contain"
      />

      <a href="#home" className="leading-none">
        <h1 className="font-['Cinzel'] text-[1.15rem] font-bold tracking-[0.28em] text-stone-900 uppercase">
          A. SANTA CRUZ
        </h1>
        <p className="mt-1 font-['Manrope'] text-[0.62rem] tracking-[0.36em] text-stone-500 uppercase">
          Architecture + Design
        </p>
      </a>
    </div>
  );
}