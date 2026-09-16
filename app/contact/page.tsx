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
    value: "linkedin.com/in/m-aktaruzzaman-opu",
    href: profile.socialLinks.linkedin,
    note: "Professional profile & updates",
  },
  ...(profile.socialLinks.facebook
    ? [
        {
          label: "Facebook",
          value: "facebook.com/maopu2001",
          href: profile.socialLinks.facebook,
          note: "Personal social updates",
        },
      ]
    : []),
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
              className="rounded-2xl border border-border bg-card p-6 space-y-2.5 shadow-sm transition-all duration-300 hover:border-accent/50"
            >
              <span className="font-mono text-xs text-accent-strong font-semibold">
                {item.label}
              </span>
              <div>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="font-serif text-lg font-bold text-foreground hover:text-accent-strong transition-colors block"
                >
                  {item.value} ↗
                </a>
              </div>
              <p className="text-xs text-faint font-mono">{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Academic & Engineering Collaboration">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm">
          <p className="text-sm text-muted-foreground leading-relaxed">
            My primary objective is long-term growth toward university teaching and computer science research. If you are a researcher, educator, or software engineer working on meaningful open-source systems, computer vision models, or educational technology, feel free to reach out directly via email.
          </p>
        </div>
      </Section>
    </>
  );
}
