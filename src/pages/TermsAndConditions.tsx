import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms & <span className="text-gradient-gold">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms & Conditions Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card p-8 md:p-10">
              <div className="prose prose-invert prose-headings:text-gradient-gold prose-lg max-w-none">
                <p className="text-lg">
                  By booking our services or accessing our website, you agree to the following Terms & Conditions. Please read them carefully.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Services</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Jagdamba Caterers provides catering and related event services for weddings, parties, and other functions.
                  </li>
                  <li>
                    Menus and dishes are subject to seasonal availability.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Booking & Payment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A booking is confirmed only after advance payment (minimum 50% of the total amount).</li>
                  <li>The balance amount must be paid before or on the day of the event.</li>
                  <li>Payments once made are non-refundable, except in cases where we fail to deliver services.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Cancellations & Refunds</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellations made at least 15 days before the event may be eligible for a partial refund (subject to expenses incurred).</li>
                  <li>Cancellations within 7 days of the event will not be refunded.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Customer Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clients must provide accurate event details (venue, timing, guest count).</li>
                  <li>Any last-minute changes may incur additional charges.</li>
                  <li>Clients are responsible for ensuring suitable arrangements for service setup at the venue (electricity, water, tables, etc., unless otherwise agreed).</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Liability</h2>
                <p>We ensure the highest standards of hygiene and quality. However, we are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delays caused by external factors (traffic, weather, strikes, etc.).</li>
                  <li>Food allergies not disclosed by the client in advance.</li>
                  <li>Damages or losses caused by third-party vendors at the event.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
                <p>
                  All images, designs, and branding related to Jagdamba Caterers are our property and may not be used without written consent.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
                <p>
                  These Terms & Conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of Jodhpur, Rajasthan courts.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
                <p>For questions about these Terms, reach out at:</p>
                <ul className="list-none space-y-2">
                  <li>📍 <strong>Address:</strong> 1/1, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur</li>
                  <li>📧 <strong>Email:</strong> jagdambacatrers@gmail.com</li>
                  <li>📞 <strong>Phone:</strong> +91 99286 49209, +91 90797 50530</li>
                </ul>

                <div className="mt-10 pt-6 border-t border-primary/20">
                  <p className="text-muted-foreground text-sm">
                    Effective Date: September 7, 2025
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

export default TermsAndConditionsPage;
