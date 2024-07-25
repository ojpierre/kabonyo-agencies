import Link from "next/link";

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-[var(--card-rgb)]">
    <img
      src="/assets/images/placeholder.png"
      alt="Company Logo"
      className="h-10"
    />
    <nav className="flex space-x-4">
      <Link href="/">
        <button className="text-[var(--foreground-rgb)] hover:text-[var(--primary-rgb)]">
          Home
        </button>
      </Link>
      <Link href="/features">
        <button className="text-[var(--foreground-rgb)] hover:text-[var(--primary-rgb)]">
          Features
        </button>
      </Link>
      <Link href="/pricing">
        <button className="text-[var(--foreground-rgb)] hover:text-[var(--primary-rgb)]">
          Pricing
        </button>
      </Link>
      <Link href="/contact">
        <button className="text-[var(--foreground-rgb)] hover:text-[var(--primary-rgb)]">
          Contact
        </button>
      </Link>
    </nav>
  </header>
);

export default Header;
