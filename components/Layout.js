import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="bg-[var(--background)] text-[var(--foreground)]">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
