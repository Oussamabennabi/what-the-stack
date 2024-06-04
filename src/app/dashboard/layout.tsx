import type { Metadata } from "next";
import Header from "./_components/header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="flex-1 overflow-hidden pt-16">{children}</main>
    </>
  );
}
