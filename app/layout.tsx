import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agentic Store Platform',
  description: 'E-commerce workspace platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="border-b">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex gap-4 items-center">
              <Link href="/" className="font-semibold">Agentic Store</Link>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/products">Products</Link>
                <Link href="/orders">Orders</Link>
                <Link href="/users">Users</Link>
                <Link href="/catalog">Catalog</Link>
                <Link href="/settings">Settings</Link>
              </div>
            </nav>
          </header>
          <main className="max-w-6xl mx-auto px-4 py-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
