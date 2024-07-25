import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faWhatsappSquare,
  faEnvelope,
  faMapMarkerAlt,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons/faPhoneSquare";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons/faSquareWhatsapp";

const ContactSection = () => (
  <section className="py-16 bg-[var(--primary)] text-[var(--primary-foreground)]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-12">
        Contact us today to learn more about our services and how we can help
        you.
      </p>
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {/* Contact Details */}
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon
            icon={faPhoneSquare}
            className="w-6 text-sm md:text-xl text-[var(--secondary)]"
          />
          <span className="text-sm md:text-base">+254716429244</span>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon
            icon={faSquareWhatsapp}
            className="w-6 text-sm md:text-xl text-[var(--secondary)]"
          />
          <span className="text-sm md:text-base">+254716429244</span>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            className="w-6 text-sm md:text-xl text-[var(--secondary)]"
          />
          <span className="text-sm md:text-base">
            kabonyoagencies@gmail.com
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="w-6 text-sm md:text-xl text-[var(--secondary)]"
          />
          <span className="text-sm md:text-base">Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
