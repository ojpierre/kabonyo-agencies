const Header = () => (
  <header className="flex justify-between items-center p-4 bg-[var(--card)]">
    <img
      src="/assets/images/placeholder.png"
      alt="Company Logo"
      className="h-10"
    />
    <nav className="flex space-x-4">
      <a href="#" className="text-[var(--foreground)]">
        Home
      </a>
      <a href="#" className="text-[var(--foreground)]">
        Features
      </a>
      <a href="#" className="text-[var(--foreground)]">
        Pricing
      </a>
      <a href="#" className="text-[var(--foreground)]">
        Contact
      </a>
    </nav>
  </header>
);

export default Header;
