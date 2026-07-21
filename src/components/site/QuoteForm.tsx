import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Check, Lock } from "lucide-react";

import { Reveal } from "./Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const contentTypes = [
  "Short Form Content",
  "Long Form Videos",
  "YouTube",
  "Podcast",
  "Commercial",
  "Social Media Ads",
  "Motion Graphics",
  "Other",
];

const volumes = ["1–5 Videos", "5–10 Videos", "10–20 Videos", "20+ Videos"];

const budgets = ["Under $300", "$300–$700", "$700–$1500", "$1500+"];

const turnarounds = ["Standard", "Fast", "Urgent"];

interface FormData {
  fullName: string;
  email: string;
  company: string;
  contentType: string;
  volume: string;
  budget: string;
  description: string;
  turnaround: string;
}

const initialData: FormData = {
  fullName: "",
  email: "",
  company: "",
  contentType: "",
  volume: "",
  budget: "",
  description: "",
  turnaround: "Standard",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function QuoteForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    fullName: false,
    email: false,
    company: false,
    contentType: false,
    volume: false,
    budget: false,
    description: false,
    turnaround: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const id = useId();

  const errors = {
    fullName: touched.fullName && !data.fullName.trim(),
    email: touched.email && (!data.email.trim() || !isValidEmail(data.email)),
    description: touched.description && !data.description.trim(),
  };

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const touch = (key: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      company: true,
      contentType: true,
      volume: true,
      budget: true,
      description: true,
      turnaround: true,
    });

    if (!data.fullName.trim() || !data.email.trim() || !isValidEmail(data.email) || !data.description.trim()) {
      return;
    }

    setSubmitted(true);
    toast.success("Thank you! Your inquiry has been recorded. We'll get back to you soon.");
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <Reveal>
        <div className="max-w-[700px] mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Get a Free Quote</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project and we'll provide a custom estimate based on your needs.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 max-w-[700px] mx-auto rounded-2xl border border-border bg-card shadow-[0_4px_60px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="py-16 text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Thank you!</h3>
                <p className="mt-3 text-muted-foreground">
                  Your inquiry has been recorded. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
                noValidate
              >
                <div className="space-y-5">
                  <div className="text-sm font-medium">Personal Information</div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FieldGroup label="Full Name" required htmlFor={`${id}-name`} error={errors.fullName}>
                      <Input
                        id={`${id}-name`}
                        type="text"
                        value={data.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        onBlur={() => touch("fullName")}
                        placeholder="Jane Doe"
                        className={cn(
                          "h-12 rounded-xl bg-white/[0.03] border-border focus:border-white/30 focus:ring-1 focus:ring-ring",
                          data.fullName.trim() && "border-emerald-500/60"
                        )}
                      />
                    </FieldGroup>
                    <FieldGroup label="Email Address" required htmlFor={`${id}-email`} error={errors.email}>
                      <Input
                        id={`${id}-email`}
                        type="email"
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        onBlur={() => touch("email")}
                        placeholder="jane@company.com"
                        className={cn(
                          "h-12 rounded-xl bg-white/[0.03] border-border focus:border-white/30 focus:ring-1 focus:ring-ring",
                          data.email.trim() && isValidEmail(data.email) && "border-emerald-500/60"
                        )}
                      />
                    </FieldGroup>
                  </div>
                  <FieldGroup label="Company / Brand" htmlFor={`${id}-company`}>
                    <Input
                      id={`${id}-company`}
                      type="text"
                      value={data.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Acme Studios"
                      className="h-12 rounded-xl bg-white/[0.03] border-border focus:border-white/30 focus:ring-1 focus:ring-ring"
                    />
                  </FieldGroup>
                </div>

                <div className="space-y-5">
                  <div className="text-sm font-medium">Project Details</div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FieldGroup label="Type of Content" htmlFor={`${id}-content`}>
                      <Select value={data.contentType} onValueChange={(v) => update("contentType", v)}>
                        <SelectTrigger
                          id={`${id}-content`}
                          className="h-12 rounded-xl bg-white/[0.03] border-border focus:border-white/30 focus:ring-1 focus:ring-ring"
                        >
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-border bg-card">
                          {contentTypes.map((type) => (
                            <SelectItem key={type} value={type} className="cursor-pointer focus:bg-white/5">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FieldGroup>
                    <FieldGroup label="Monthly Editing Volume" htmlFor={`${id}-volume`}>
                      <Select value={data.volume} onValueChange={(v) => update("volume", v)}>
                        <SelectTrigger
                          id={`${id}-volume`}
                          className="h-12 rounded-xl bg-white/[0.03] border-border focus:border-white/30 focus:ring-1 focus:ring-ring"
                        >
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-border bg-card">
                          {volumes.map((vol) => (
                            <SelectItem key={vol} value={vol} className="cursor-pointer focus:bg-white/5">
                              {vol}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FieldGroup>
                  </div>
                  <FieldGroup label="Estimated Budget" htmlFor={`${id}-budget`}>
                    <Select value={data.budget} onValueChange={(v) => update("budget", v)}>
                      <SelectTrigger
                        id={`${id}-budget`}
                        className="h-12 rounded-xl bg-white/[0.03] border-border focus:border-white/30 focus:ring-1 focus:ring-ring"
                      >
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-border bg-card">
                        {budgets.map((budget) => (
                          <SelectItem key={budget} value={budget} className="cursor-pointer focus:bg-white/5">
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FieldGroup>
                  <FieldGroup label="Project Description" required htmlFor={`${id}-description`} error={errors.description}>
                    <Textarea
                      id={`${id}-description`}
                      value={data.description}
                      onChange={(e) => update("description", e.target.value)}
                      onBlur={() => touch("description")}
                      placeholder="Tell us about your content, editing style, goals, references, turnaround expectations, or anything else that will help us understand your project."
                      className={cn(
                        "min-h-[140px] rounded-xl bg-white/[0.03] border-border focus:border-white/30 focus:ring-1 focus:ring-ring resize-none",
                        data.description.trim() && "border-emerald-500/60"
                      )}
                    />
                  </FieldGroup>
                </div>

                <FieldGroup label="Preferred Turnaround">
                  <RadioGroup
                    value={data.turnaround}
                    onValueChange={(v) => update("turnaround", v)}
                    className="flex flex-wrap gap-4"
                  >
                    {turnarounds.map((option) => (
                      <label
                        key={option}
                        htmlFor={`${id}-turnaround-${option}`}
                        className="flex items-center gap-2.5 rounded-full border border-border bg-white/[0.03] px-4 py-2.5 cursor-pointer hover:border-white/20 transition-colors has-[[data-state=checked]]:border-white/40 has-[[data-state=checked]]:bg-white/[0.06]"
                      >
                        <RadioGroupItem value={option} id={`${id}-turnaround-${option}`} />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </FieldGroup>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-13 rounded-full bg-foreground text-background hover:bg-foreground/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 text-base font-medium"
                  >
                    Get My Quote
                  </Button>
                </motion.div>

                <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                  <Lock size={12} />
                  Your information stays private. We never share your details.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

function FieldGroup({
  label,
  required,
  htmlFor,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor?: string;
  error?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 transition-transform duration-200 focus-within:-translate-y-0.5">
      <Label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {required && <span className="text-muted-foreground ml-1">*</span>}
      </Label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-400"
        >
          {label === "Email Address" ? "Please enter a valid email address." : "This field is required."}
        </motion.p>
      )}
    </div>
  );
}
