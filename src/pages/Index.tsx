
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing. We'll be in touch soon!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 py-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/7b5adc01-2bf9-41e0-8eb2-3cd3066a6cc1.png" 
                alt="Seka Studio Logo" 
                className="h-24 md:h-32"
              />
            </div>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="text-yellow-400">Seka Studio</span> is coming soon
                </h1>
                <p className="text-xl md:text-2xl text-slate-300">
                  Transforming businesses across Sub-Saharan Africa with no-code solutions
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                />
                <Button type="submit" disabled={isSubmitting} className="bg-yellow-500 hover:bg-yellow-600">
                  {isSubmitting ? "Subscribing..." : "Get Updates"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Seka Studio. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="mailto:info@sekastudio.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
