import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimationWrapper from "@/components/AnimationWrapper";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const message = (form.get("message") as string)?.trim();
    if (!name) errs.name = "Name is required";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Valid email is required";
    if (!message) errs.message = "Message is required";
    return errs;
  };


const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const errs = validate(formData);

  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  setErrors({});

  // Convert FormData to plain object
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // ✅ EmailJS integration
  emailjs
    .send(
        "service_l84929o",       // Service ID
        "template_j2nets1",      // ✅ Your Template ID
      data,
        "KdgWAQIC2r5tIBJzk"      // Public Key
      )

    .then(() => {
      setSubmitted(true);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    });
};


  const socials = [
    { icon: Github, href: "https://github.com/Siddharthnigam", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-nigam-33b039257", label: "LinkedIn" },
    { icon: Mail, href: "mailto:siddharthjinigam@gmail.com", label: "siddharthjinigam@gmail.com" },
    { icon: Phone, href: "tel:9098613462", label: "9098613462" },
  ];

  return (
    <main className="min-h-screen pt-32 px-6 pb-20">
      <SEO
        title="Contact | Siddharth Nigam"
        description="Get in touch with Siddharth Nigam for collaboration or opportunities."
        path="/contact"
      />

      <section className="max-w-6xl mx-auto">
        <AnimationWrapper>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-12">
            Let's work<br />
            <span className="text-muted-foreground italic font-light">together.</span>
          </h1>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <AnimationWrapper delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] bg-card border border-foreground/5 rounded-sm p-8"
                >
                  <CheckCircle className="text-foreground mb-4" size={48} strokeWidth={1} />
                  <h3 className="text-xl font-medium text-foreground mb-2">Message Sent</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <Input
                      name="name"
                      placeholder="Name"
                      className="bg-card border-foreground/10 text-foreground placeholder:text-muted-foreground h-12"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="bg-card border-foreground/10 text-foreground placeholder:text-muted-foreground h-12"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      className="bg-card border-foreground/10 text-foreground placeholder:text-muted-foreground resize-none"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="gap-2">
                    Send Message <Send size={16} />
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimationWrapper>

          {/* Social Links */}
          <AnimationWrapper delay={0.2}>
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Other ways to connect
            </h2>
            <div className="space-y-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-foreground/5 rounded-sm hover:bg-foreground/5 transition-colors group"
                >
                  <div className="p-2 border border-foreground/10 rounded-full">
                    <Icon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </main>
  );
};

export default Contact;
