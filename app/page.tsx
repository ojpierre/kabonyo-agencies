import Image from "next/image";
import Layout from "../components/Layout";
import ContactSection from "../components/contactSection";


const Home = () => (
  <Layout>
    <section className="text-center py-16 bg-[var(--primary)] text-[var(--primary-foreground)]">
      <h1 className="text-4xl font-bold">Comprehensive Accounting Solutions</h1>
      <p className="mt-4">
        Providing expert tax returns, bookkeeping, and financial advice for
        businesses and individuals.
      </p>
      {/*<div className="mt-6 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border-[var(--border)] rounded-md"
        />
        <button className="bg-[var(--secondary)] text-[var(--secondary-foreground)] p-2 rounded-md">
          Get Started
        </button>
</div>*/}
    </section>

    <section className="py-16 bg-[var(--background-rgb)] text-[var(--foreground-rgb)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-4 bg-[var(--card)] rounded-md shadow-lg">
            <Image
              src="/assets/images/taxreturns.webp"
              alt="Tax Returns"
              className="h-24 w-24 mb-4"
              width={256} // Provide the width
      height={48}
            />
            <h3 className="text-xl font-semibold">Tax Returns</h3>
            <p className="mt-2">
              Expert preparation and filing of your tax returns.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-[var(--card)] rounded-md shadow-lg">
            <Image
              src="/assets/images/bookkeeping.webp"
              alt="Bookkeeping"
              className="h-24 w-24 mb-4"
              width={256} // Provide the width
      height={48}
            />
            <h3 className="text-xl font-semibold">Bookkeeping</h3>
            <p className="mt-2">Accurate and reliable bookkeeping services.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-[var(--card)] rounded-md shadow-lg">
            <Image

              src="/assets/images/financialadvice.webp"
              alt="Financial Advice"
              className="h-24 w-24 mb-4"
              width={256} // Provide the width
      height={48}
            />
            <h3 className="text-xl font-semibold">Financial Advice</h3>
            <p className="mt-2">
              Personalized financial guidance and planning.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-[var(--card)] rounded-md shadow-lg">
            <Image

              src="/assets/images/payroll.webp"
              alt="Payroll Services"
              className="h-24 w-24 mb-4"
              width={256} // Provide the width
      height={48}
            />
            <h3 className="text-xl font-semibold">Payroll Services</h3>
            <p className="mt-2">
              Efficient payroll processing for your business.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-[var(--accent)] text-[var(--accent-foreground)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="mb-8">
          We are experienced professionals providing reliable and personalized
          accounting solutions.
          We are members of ICPAK, degree holders, and have been in business for over 10 years. 
          We are for you.
        </p>
        <Image

          src="/assets/images/experienced.webp"
          alt="Why Choose Us"
          className="mx-auto h-96 w-96"
          width={256} // Provide the width
      height={48}
        />
      </div>
    </section>

    <section className="py-16 bg-[var(--background-rgb)] text-[var(--foreground-rgb)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-[var(--card)] rounded-md shadow-lg">
            <Image
              src="/assets/images/customer1.webp"
              alt="Customer 1"
              className="mx-auto h-24 w-24 rounded-full mb-4"
              width={256} // Provide the width
      height={48}
            />
            <p>"Excellent service and very professional."</p>
            <p className="mt-2 font-bold">- Customer 1</p>
          </div>
          <div className="p-4 bg-[var(--card)] rounded-md shadow-lg">
            <Image

              src="/assets/images/customer2.webp"
              alt="Customer 2"
              className="mx-auto h-24 w-24 rounded-full mb-4"
              width={256} // Provide the width
      height={48}
            />
            <p>
              "Highly recommend Kabonyo Agencies for all your accounting needs."
            </p>
            <p className="mt-2 font-bold">- Customer 2</p>
          </div>
          <div className="p-4 bg-[var(--card)] rounded-md shadow-lg">
            <Image

              src="/assets/images/customer3.webp"
              alt="Customer 3"
              className="mx-auto h-24 w-24 rounded-full mb-4"
              width={256} // Provide the width
      height={48}
            />
            <p>"Great experience, very knowledgeable staff."</p>
            <p className="mt-2 font-bold">- Customer 3</p>
          </div>
        </div>
      </div>
    </section>
        <ContactSection />
    {/*<section className="py-16 bg-[var(--primary)] text-[var(--primary-foreground)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8">
          Contact us today to learn more about our services and how we can help
          you.
        </p>
         TODO: Add contact form <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-[var(--border)] rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-[var(--border)] rounded-md"
          />
          <button className="bg-[var(--secondary)] text-[var(--secondary-foreground)] p-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </section>*/}
  </Layout>
);

export default Home;
