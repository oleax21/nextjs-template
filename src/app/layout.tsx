import 'src/app/globals.css';

export const metadata = {
  title: 'My Nextjs template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <head />
      <body>{children}</body>
    </html>
  );
}
