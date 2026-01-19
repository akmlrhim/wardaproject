import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-50 mt-12 border-t border-green-100">
      <div className="mx-auto max-w-screen-xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity duration-200"
          >
            <img
              src={logo}
              className="h-8"
              alt="Warda Mompreneur"
            />
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors duration-200"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-700 hover:text-green-900 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-green-100">
          <p className="text-xs text-green-600 text-center tracking-wide">
            © 2026{" "}
            <a
              href="/"
              className="hover:text-green-800 transition-colors duration-200 font-medium"
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
