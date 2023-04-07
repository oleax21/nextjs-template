import 'src/app/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Nextjs template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
