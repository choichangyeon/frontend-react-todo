import TanstackQueryProvider from "@/provider/tanstack-query-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO APP",
  description: "React Todo App 바로인턴 12기 과제",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
