
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-skie">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 py-12 bg-white text-slate-900">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo and Brand Name */}
            <div className="mb-8 flex items-center gap-3">
              <img 
                src="/lovable-uploads/391663c5-8e61-47b2-888e-e16676c6d6b7.png" 
                alt="Seka Studio Logo" 
                className="h-16 md:h-20"
              />
              <span className="text-2xl md:text-3xl font-skie text-slate-800">seka.studio</span>
            </div>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-normal tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 via-yellow-500 via-orange-500 to-blue-500">Seka Studio</span> is coming soon
                </h1>
                <p className="text-lg md:text-xl text-slate-600">
                  On the mission to streamline and accelerate digital transformation for businesses in Sub-Saharan Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white text-slate-600 py-6 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Seka Studio. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="mailto:v.isingizwe@seka.studio" className="hover:text-yellow-500 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
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
