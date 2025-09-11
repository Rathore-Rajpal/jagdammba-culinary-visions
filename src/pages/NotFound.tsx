import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="glass-card p-10 text-center max-w-lg mx-auto">
        <img 
          src="/logo.png" 
          alt="Jagdamba Caterers Logo" 
          className="w-24 h-24 mx-auto mb-6" 
        />
        <h1 className="mb-4 text-5xl font-bold text-gradient-gold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! The page you're looking for cannot be found.</p>
        <Link to="/">
          <Button className="btn-hero-primary golden-glow">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
