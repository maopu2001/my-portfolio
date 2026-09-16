import type { Metadata } from "next";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/icons/BrandIcons";
import { Section } from "@/components/Section";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact information for ${profile.name}. Open to engineering projects, research discussions, and academic opportunities.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${profile.name}`,
    description: `Contact ${profile.name} — open to engineering collaboration and computer vision research discussions.`,
    url: "https://maopu.com.bd/contact",
  },
};

const contactItems = [
  {
    label: "Email",
    value: profile.socialLinks.rawEmail,
    href: profile.socialLinks.email,
    note: "Primary communication channel",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/maopu2001",
    href: profile.socialLinks.github,
    note: "Public code repositories & experiments",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/m-aktaruzzaman-opu",
    href: profile.socialLinks.linkedin,
    note: "Professional profile & updates",
    icon: LinkedinIcon,
  },
  ...(profile.socialLinks.facebook
    ? [
        {
          label: "Facebook",
          value: "facebook.com/maopu2001",
          href: profile.socialLinks.facebook,
          note: "Personal social updates",
          icon: FacebookIcon,
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
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-card p-6 space-y-3 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 active:scale-[0.99] block cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-xl border border-border bg-muted/60 text-foreground group-hover:border-accent/40 group-hover:text-accent-strong transition-colors">
                      <Icon className="size-4" />
                    </div>
                    <span className="font-mono text-xs text-accent-strong font-semibold">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent-strong group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div>
                  <span className="font-serif text-lg font-bold text-foreground group-hover:text-accent-strong transition-colors block">
                    {item.value}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground font-mono">{item.note}</p>
              </a>
            );
          })}
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
