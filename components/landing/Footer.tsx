import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-10 md:flex-row md:items-center">

        {/* Left */}

        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            ResumeAI
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            © {new Date().getFullYear()} ResumeAI.
            Editorial-grade AI resume analysis.
          </p>
        </div>

        {/* Right */}

        <nav>
          <ul className="flex flex-wrap gap-6 text-sm text-slate-500">
            <li>
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-blue-600"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/terms-of-service"
                className="transition-colors hover:text-blue-600"
              >
                Terms of Service
              </Link>
            </li>

            <li>
              <Link
                href="/security"
                className="transition-colors hover:text-blue-600"
              >
                Security
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;