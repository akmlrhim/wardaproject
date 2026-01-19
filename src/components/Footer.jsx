import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-50 mt-12 border-t border-green-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center">
          <a
            href="/"
            className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity"
          >
            <img
              src={logo}
              className="h-8"
              alt="Warda Mompreneur"
            />
          </a>

          <nav
            aria-label="Footer navigation"
            className="w-full sm:w-auto"
          >
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-center sm:flex sm:items-center sm:gap-x-8 sm:text-left">
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-green-100">
          <p className="text-xs text-green-600 text-center leading-relaxed">
            © 2026{" "}
            <a
              href="/"
              className="hover:text-green-800 transition-colors font-medium"
            >
              Warda Mompreneur
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
