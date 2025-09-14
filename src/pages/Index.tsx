import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuShowcase } from "@/components/MenuShowcase";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema, FAQSchema } from "@/lib/seo";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    // Update document title for better SEO
    document.title = "Best Catering Services in Jodhpur | Jagdamba Caterers & Events";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* Add structured data for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify(LocalBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(FAQSchema)}
        </script>
        {/* Additional meta tags for SEO */}
        <meta name="keywords" content="best catering services in jodhpur, wedding catering in jodhpur, catering services jodhpur, event caterers jodhpur, food catering" />
        <link rel="canonical" href="https://www.jagdambacaterersjodhpur.in/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuShowcase />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
