const Footer = () => (
  <footer className="py-8 bg-[var(--card)] text-[var(--card-foreground)]">
    <div className="max-w-4xl mx-auto text-center">
      <img
        src="/assets/images/placeholder.png"
        alt="Company Logo"
        className="h-10 mx-auto mb-4"
      />
      <nav className="flex justify-center space-x-4">
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
      <p className="mt-4">&copy; 2023 Kabonyo Agencies. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
