import logo from "../assets/pranta_img.jpeg";

function Banner() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Pranta Bhaiya"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-400/50"
          />

          <div>
            <h1 className="text-lg font-bold text-white sm:text-xl">
              Pranta Bhaiya
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              Welcome to my website
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Banner;
