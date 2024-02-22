import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });


export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
          {children}
                </body>
    </html>
  );
}
