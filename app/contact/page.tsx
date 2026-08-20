import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact information for ${profile.name}. Open to engineering projects, research discussions, and academic opportunities.`,
};

const contactItems = [
  {
    label: "Email",
    value: profile.socialLinks.rawEmail,
    href: profile.socialLinks.email,
    note: "Primary communication channel",
  },
  {
    label: "GitHub",
    value: "github.com/maopu2001",
    href: profile.socialLinks.github,
    note: "Public code repositories & experiments",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maopu2001",
    href: profile.socialLinks.linkedin,
    note: "Professional profile & updates",
  },
  {
    label: "Facebook",
    value: "facebook.com/maopu2001",
    href: profile.socialLinks.facebook,
    note: "Personal social updates",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section
        title="Get in Touch"
        subtitle="Open to engineering collaboration, research discussions in computer vision, and academic opportunities."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 space-y-2.5 shadow-sm transition-all duration-300 hover:border-[#ff4d00]/50"
            >
              <span className="font-mono text-xs text-[#ff4d00] font-semibold">
                {item.label}
              </span>
              <div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-lg font-bold text-[#1a2332] dark:text-[#fffcf3] hover:text-[#ff4d00] transition-colors block"
                >
                  {item.value} ↗
                </a>
              </div>
              <p className="text-xs text-[#6b7280] dark:text-[#737373] font-mono">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Academic & Engineering Collaboration">
        <div className="rounded-2xl border border-[#e8e2d2] bg-white dark:border-white/10 dark:bg-[#121212] p-6 sm:p-8 space-y-4 shadow-sm">
          <p className="text-sm text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed">
            My primary objective is long-term growth toward university teaching and computer science research. If you are a researcher, educator, or software engineer working on meaningful open-source systems, computer vision models, or educational technology, feel free to reach out directly via email.
          </p>
        </div>
      </Section>
    </>
  );
}
