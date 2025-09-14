import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuShowcase } from "@/components/MenuShowcase";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import { ReviewCTA } from "@/components/ReviewCTA";
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
        
        {/* Review Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Customer <span className="text-gradient-gold">Satisfaction</span></h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of satisfied customers who have experienced the best catering services in Jodhpur. We value your feedback!
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ReviewCTA variant="full" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
