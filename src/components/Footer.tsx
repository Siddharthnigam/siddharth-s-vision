import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-foreground/5 bg-background">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-foreground font-semibold text-lg mb-2">
            Siddharth Nigam
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            AI-Driven Full Stack Developer building high-performance digital interfaces.
          </p>
          <div className="flex items-center gap-1 mt-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              Available for new opportunities — Ujjain, IN
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["/", "/about", "/projects", "/resume", "/contact"].map((path) => (
              <li key={path}>
                <Link to={path} className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Connect</h4>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/Siddharthnigam", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-nigam-33b039257", label: "LinkedIn" },
              { icon: Mail, href: "mailto:siddharthjinigam@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:9098613462", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 border border-foreground/10 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-foreground/5 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Siddharth Nigam. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
