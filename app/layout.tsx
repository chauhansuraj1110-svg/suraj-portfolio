import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suraj Chauhan | Database Administrator",
  description: "Portfolio of Suraj Chauhan — Database Administrator skilled in MySQL, PostgreSQL, MongoDB, Redis, database reliability, and performance tuning."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
