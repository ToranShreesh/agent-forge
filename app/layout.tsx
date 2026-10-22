import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/ui/tooltip";
import { Toaster } from "@/components/ui/ui/sonner";
import App from "next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Headings only; the optical-size axis gives large haeadings a tighter, more characterful cut.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
})

export const metadata: Metadata = {
  title: "Agent-Forge",
  description: "AI agent that turns prompts into live workspaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
      <TooltipProvider>
        <AppShell>{children}</AppShell>
      </TooltipProvider>
      <Toaster richColors />
    </body>
    </html>
  );
}
