import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="flex align-middle justify-between items-center p-4 bg-[var(--card-rgb)] shadow-md">
    <Image
      width={230} // Provide the width
      height={48}
      src="/assets/images/kabonyoagencieslogo.png"
      alt="Company Logo"
      // Provide the height
      className="h-12 md:h-14 w-64" // Adjust height for responsiveness
    />
    {/*<nav className="flex space-x-4 md:space-x-6">
      <Link
        href="/"
        className="text-[var(--foreground-rgb)] bg-[var(--primary-rgb)] hover:bg-[var(--primary-dark)] px-4 py-2 transition-all duration-300 ease-in-out shadow-md"
      >
        Home
      </Link>
      <Link
        href="/features"
        className="text-[var(--foreground-rgb)] bg-[var(--primary-rgb)] hover:bg-[var(--primary-dark)] px-4 py-2 transition-all duration-300 ease-in-out shadow-md"
      >
        Features
      </Link>
      <Link
        href="/pricing"
        className="text-[var(--foreground-rgb)] bg-[var(--primary-rgb)] hover:bg-[var(--primary-dark)] px-4 py-2 transition-all duration-300 ease-in-out shadow-md"
      >
        Pricing
      </Link>
      <Link
        href="/contact"
        className="text-[var(--foreground-rgb)] bg-[var(--primary-rgb)] hover:bg-[var(--primary-dark)] px-4 py-2 transition-all duration-300 ease-in-out shadow-md"
      >
        Contact
      </Link>
    </nav>*/}
  </header>
);

export default Header;
