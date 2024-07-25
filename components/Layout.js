import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="bg-[var(--background-rgb)] text-[var(--foreground-rgb)] min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
