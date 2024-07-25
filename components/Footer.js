import Image from "next/image";

const Footer = () => (
  <footer className="py-8 bg-[var(--card)] text-[var(--card-foreground)]">
    <div className="max-w-4xl mx-auto text-center">
      <Image
        width={220} // Provide the width
        height={48}
        src="/assets/images/kabonyoagencieslogo.png"
        alt="Company Logo"
        className="h-10 mx-auto mb-4"
      />
      <p className="mt-4">&copy; 2024 Kabonyo Agencies. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
