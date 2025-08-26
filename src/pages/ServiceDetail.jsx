import React from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/css/ServiceDetail.css";
import { 
  FaCompass, 
  FaPencilRuler, 
  FaCode, 
  FaShoppingCart, 
  FaTachometerAlt, 
  FaLifeRing 
} from "react-icons/fa";

const SERVICES = {
  "discovery-strategy": {
    title: "Discovery & Strategy",
    summary: "Workshops, research, and roadmaps to align teams and goals.",
    bullets: [
      "Stakeholder workshops",
      "User interviews & personas",
      "Information architecture",
      "Roadmapping & KPIs",
    ],
    icon: FaCompass,
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    summary: "Design systems, prototypes, and delightful user experiences.",
    bullets: [
      "Wireframes & prototypes",
      "Design systems",
      "Accessibility (WCAG)",
      "Usability testing",
    ],
    icon: FaPencilRuler,
  },
  "web-development": {
    title: "Web Development",
    summary: "Fast, secure, and scalable websites and apps.",
    bullets: [
      "React/Next.js builds",
      "API integrations",
      "Authentication & roles",
      "CMS & headless setups",
    ],
    icon: FaCode,
  },
  "ecommerce": {
    title: "Ecommerce Solutions",
    summary: "Conversion-focused storefronts and seamless checkout flows.",
    bullets: [
      "Payments & subscriptions",
      "Cart & checkout",
      "Inventory & shipping",
      "Analytics & A/B testing",
    ],
    icon: FaShoppingCart,
  },
  "performance-seo": {
    title: "Performance & SEO",
    summary: "Core Web Vitals, schema, and technical SEO best practices.",
    bullets: [
      "CWV optimization",
      "Structured data",
      "Sitemaps & indexing",
      "Analytics & dashboards",
    ],
    icon: FaTachometerAlt,
  },
  "care-support": {
    title: "Care & Support",
    summary: "Maintenance, monitoring, and continuous improvement.",
    bullets: [
      "Security & updates",
      "Uptime monitoring",
      "Performance audits",
      "Roadmap iterations",
    ],
    icon: FaLifeRing,
  },
};

const toSlug = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES[slug];

  if (!service) {
    return (
      <section className="container">
        <h2 className="section-title">Service not found</h2>
        <p>Try one of our services below.</p>
        <div className="grid">
          {Object.values(SERVICES).map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <Link to={`/services/${toSlug(s.title)}`}>Learn more →</Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <div className="service-detail-page">
      {/* Hero Header */}
      <header className="hero service-hero">
        <h1 className="hero-title">
          {Icon && <Icon className="hero-icon" />} {service.title}
        </h1>
        <p className="hero-subtitle">{service.summary}</p>
      </header>

      {/* What You Get */}
      <section className="container">
        <h2 className="section-title">What’s Included</h2>
        <div className="grid">
          {service.bullets.map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>
                Our team ensures <strong>{item.toLowerCase()}</strong> is executed with
                precision, driving measurable business outcomes.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container form-section">
  <form className="service-form">
    <h2>Discuss {service.title}</h2>

    <div className="form-row">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
    </div>

    <div className="form-row">
      <input type="tel" name="phone" placeholder="Mobile Number" required />
      <select name="service" required>
        <option value="">Select a Service</option>
        <option value="discovery-strategy">Discovery & Strategy</option>
        <option value="ui-ux-design">UI/UX Design</option>
        <option value="web-development">Web Development</option>
        <option value="ecommerce">Ecommerce</option>
        <option value="performance-seo">Performance & SEO</option>
        <option value="care-support">Care & Support</option>
      </select>
    </div>

    <textarea
      name="message"
      rows="5"
      placeholder="What do you need help with?"
    ></textarea>

    <button type="submit">🚀 Get a Free Quote</button>
  </form>
</section>

    </div>
  );
};

export default ServiceDetail;
