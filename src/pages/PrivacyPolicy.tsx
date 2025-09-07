import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient-gold">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-8 md:p-10">
              <div className="prose prose-invert prose-headings:text-gradient-gold prose-lg max-w-none">
                <p className="text-lg">
                  At Jagdamba Caterers ("we," "our," "us"), your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                <p>We may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal details:</strong> Name, phone number, email address, address.
                  </li>
                  <li>
                    <strong>Event details:</strong> Date, venue, type of function, guest count.
                  </li>
                  <li>
                    <strong>Payment details</strong> (processed securely through third-party providers).
                  </li>
                  <li>
                    Any messages, feedback, or inquiries you share with us.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide catering and event services.</li>
                  <li>Process payments and bookings.</li>
                  <li>Communicate with you regarding your orders and services.</li>
                  <li>Improve our menu, services, and customer experience.</li>
                  <li>Send occasional promotional offers (with your consent).</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Sharing</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not sell or rent your personal information.</li>
                  <li>We may share details with trusted third-party service providers (payment gateways, event partners) strictly for service delivery.</li>
                  <li>We may disclose information if required by law or to protect our legal rights.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
                <p>
                  We take reasonable measures to protect your data from unauthorized access, misuse, or disclosure. However, no system is 100% secure.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your personal information.</li>
                  <li>Correct or update your details.</li>
                  <li>Opt-out of marketing communications.</li>
                  <li>Request deletion of your data (where legally possible).</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
                <p>For any privacy-related concerns, contact us at:</p>
                <ul className="list-none space-y-2">
                  <li>📍 <strong>Address:</strong> 1/1, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur</li>
                  <li>📧 <strong>Email:</strong> info@jagdammbacaterers.com</li>
                  <li>📞 <strong>Phone:</strong> +91 99286 49209, +91 90797 50530</li>
                </ul>

                <div className="mt-10 pt-6 border-t border-primary/20">
                  <p className="text-muted-foreground text-sm">
                    Last Updated: September 7, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
