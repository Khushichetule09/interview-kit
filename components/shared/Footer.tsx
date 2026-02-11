import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GeistPixelTriangle } from "geist/font/pixel";
import { Bolt, GithubIcon } from "lucide-react";
import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from "@/components/ui/glimpse";
import { glimpse } from "@/components/ui/server";

const navLinks = [
  { href: "#", label: "Features" },
  { href: "#", label: "Blog" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Licence" },
  { href: "#", label: "Privacy" },
];

const socialLinks = [
  {
    href: "https://x.com/khushiirl",
    label: "X",
    icon: <XIcon />,
  },
  {
    href: "https://github.com/KhushiChetule09",
    label: "Github",
    icon: <GithubIcon />,
  },
];

export async function Footer() {
  const data1 = await glimpse("https://github.com/subhadeeproy3902");
  const data2 = await glimpse("https://github.com/KhushiChetule09");

  return (
    <footer className="mx-auto max-w-5xl *:px-4 *:md:px-6">
      <div className="flex flex-col gap-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bolt className="size-6 shrink-0 text-primary" />
            <span
              className={cn(
                "text-sm font-semibold text-nowrap text-primary",
                GeistPixelTriangle.className,
              )}
            >
              PrepKit
            </span>
          </div>
          <div className="flex items-center">
            {socialLinks.map(({ href, label, icon }) => (
              <Button asChild key={label} size="icon-sm" variant="ghost">
                <a aria-label={label} href={href}>
                  {icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-4 font-medium text-muted-foreground text-sm md:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-foreground" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between gap-4 border-t py-4 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} PrepKit</p>

        <p className="inline-flex items-center gap-1">
          <span>Built by</span>

          <Glimpse closeDelay={0} openDelay={0}>
            <GlimpseTrigger asChild>
              <a
                className="font-medium text-primary underline"
                href="https://x.com/khushiirl"
              >
                Khushi
              </a>
            </GlimpseTrigger>
            <GlimpseContent className="w-80 bg-secondary">
              <GlimpseImage src={data2.image ?? ""} />
              <GlimpseTitle className="line-clamp-2 font-semibold text-base">{data2.title}</GlimpseTitle>
              <GlimpseDescription className="text-xs">{data2.description}</GlimpseDescription>
            </GlimpseContent>
          </Glimpse>
          <span>and</span>
          <Glimpse closeDelay={0} openDelay={0}>
            <GlimpseTrigger asChild>
              <a
                className="font-medium text-primary underline"
                href="https://x.com/mvp_subha"
              >
                Subhadeep
              </a>
            </GlimpseTrigger>
            <GlimpseContent className="w-80 bg-secondary">
              <GlimpseImage src={data1.image ?? ""} />
              <GlimpseTitle className="line-clamp-2 font-semibold text-base">{data1.title}</GlimpseTitle>
              <GlimpseDescription className="text-xs">{data1.description}</GlimpseDescription>
            </GlimpseContent>
          </Glimpse>
        </p>
      </div>
    </footer>
  );
}

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
    </svg>
  );
}
