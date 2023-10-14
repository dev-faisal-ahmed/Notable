import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConvexProvider } from '@/components/providers/convex-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Noteable',
  description: 'An app that manages your workspace better.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='Noteable'
          >
            {children}
          </ThemeProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
