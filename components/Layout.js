import Header from "./Header";

const Layout = ({ children }) => (
  <div className="bg-[var(--background-rgb)] text-[var(--foreground-rgb)] min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
    <footer className="py-8 bg-[var(--card-rgb)] text-center">
      <img
        src="/assets/images/placeholder.png"
        alt="Company Logo"
        className="h-10 mx-auto mb-4"
      />
      <nav className="flex justify-center space-x-4">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </nav>
      <p className="mt-4">&copy; 2023 Kabonyo Agencies. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;
