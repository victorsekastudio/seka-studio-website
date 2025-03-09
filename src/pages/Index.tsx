
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="text-purple-400">Seka Studio</span> is coming soon
                </h1>
                <p className="text-xl md:text-2xl text-slate-300">
                  Transforming businesses across Sub-Saharan Africa with no-code solutions
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-xl">✅</span>
                    <p className="text-slate-300">Custom Internal Tools to streamline operations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-xl">✅</span>
                    <p className="text-slate-300">AI-Powered Workflows for enhanced efficiency</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-xl">✅</span>
                    <p className="text-slate-300">Data Centralization for clear insights</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-xl">✅</span>
                    <p className="text-slate-300">Rapid MVP Development for startups</p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Get Updates"}
                </Button>
              </form>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <CardTitle>Launch Timeline</CardTitle>
                  <CardDescription className="text-slate-400">Stay tuned for our official launch</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center">
                      <span>1</span>
                    </div>
                    <div>
                      <p className="font-medium">Coming Soon Page</p>
                      <p className="text-sm text-slate-400">You are here!</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center">
                      <span>2</span>
                    </div>
                    <div>
                      <p className="font-medium">Website Launch</p>
                      <p className="text-sm text-slate-400">Q2 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center">
                      <span>3</span>
                    </div>
                    <div>
                      <p className="font-medium">Case Studies Release</p>
                      <p className="text-sm text-slate-400">Q3 2024</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Book a Free Consultation
                  </Button>
                </CardFooter>
              </Card>
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
