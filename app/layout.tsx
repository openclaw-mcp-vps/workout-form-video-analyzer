import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormCheck AI – Real-Time Workout Form Analyzer",
  description: "AI-powered form checker for home workouts. Get instant feedback on your exercise technique using your phone camera."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9abc2c1b-183a-470d-b34d-ccca10e11b30"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
