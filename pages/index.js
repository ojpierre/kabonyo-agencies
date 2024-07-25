import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <section className="text-center py-16 bg-[var(--primary)] text-[var(--primary-foreground)]">
      <h1 className="text-4xl font-bold">Comprehensive Accounting Solutions</h1>
      <p className="mt-4">
        Providing expert tax returns, bookkeeping, and financial advice for
        businesses and individuals.
      </p>
      <div className="mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border-[var(--border)] rounded-md"
        />
        <button className="bg-[var(--secondary)] text-[var(--secondary-foreground)] p-2 rounded-md ml-2">
          Get Started
        </button>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/assets/images/placeholder.png"
          alt="Service Image"
          className="mx-auto mb-8"
        />
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4">
          We offer a range of accounting services to meet your needs.
        </p>
        <ul className="mt-6 space-y-2">
          <li>Tax Returns</li>
          <li>Bookkeeping</li>
          <li>Financial Advice</li>
          <li>Payroll Services</li>
        </ul>
      </div>
    </section>

    <section className="py-16 bg-[var(--accent)] text-[var(--accent-foreground)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="mt-4">
          Experienced professionals providing reliable and personalized
          accounting solutions.
        </p>
        <img
          src="/assets/images/placeholder.png"
          alt="Why Choose Us"
          className="mx-auto mt-8"
        />
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Customer Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-[var(--card)] rounded-md">
            <img
              src="/assets/images/placeholder.png"
              alt="Customer 1"
              className="mx-auto rounded-full mb-4"
            />
            <p>"Excellent service and very professional."</p>
            <p className="mt-2 font-bold">- Customer 1</p>
          </div>
          <div className="p-4 bg-[var(--card)] rounded-md">
            <img
              src="/assets/images/placeholder.png"
              alt="Customer 2"
              className="mx-auto rounded-full mb-4"
            />
            <p>
              "Highly recommend Kabonyo Agencies for all your accounting needs."
            </p>
            <p className="mt-2 font-bold">- Customer 2</p>
          </div>
          <div className="p-4 bg-[var(--card)] rounded-md">
            <img
              src="/assets/images/placeholder.png"
              alt="Customer 3"
              className="mx-auto rounded-full mb-4"
            />
            <p>"Great experience, very knowledgeable staff."</p>
            <p className="mt-2 font-bold">- Customer 3</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-[var(--primary)] text-[var(--primary-foreground)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4">
          Contact us today to learn more about our services and how we can help
          you.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border-[var(--border)] rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border-[var(--border)] rounded-md"
          />
          <button className="bg-[var(--secondary)] text-[var(--secondary-foreground)] p-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
