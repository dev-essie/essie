import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Essie — Software Developer',
  description: 'Essie builds websites, custom integrations, and useful automations. Explore selected work including Gofame 360 and Emmanuel Onoja’s newsletter.',
  openGraph: { title: 'Essie — Software Developer', description: 'Thoughtful code. Useful things.', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
