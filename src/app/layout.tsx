import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO APP",
  description: "React Todo App 바로인턴 12기 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
