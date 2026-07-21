import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <div className="w-7 h-7 rounded-md bg-foreground text-background flex items-center justify-center text-xs font-bold">L</div>
            Lumen Studio
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            A luxury video editing studio for creators and brands who care about craft.
          </p>
          <a href="mailto:hello@lumenstudio.co" className="mt-6 inline-block text-sm text-foreground hover:opacity-80">
            hello@lumenstudio.co
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:opacity-80">Home</Link></li>
            <li><Link to="/portfolio" className="hover:opacity-80">Portfolio</Link></li>
            <li><a href="#services" className="hover:opacity-80">Services</a></li>
            <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram size={18} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground"><Youtube size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Lumen Studio. All rights reserved.</span>
          <span>Crafted with obsession.</span>
        </div>
      </div>
    </footer>
  );
}
