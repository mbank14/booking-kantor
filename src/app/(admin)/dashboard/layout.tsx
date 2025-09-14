export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <div className="md:grid md:grid-cols-[1fr_2fr]">
            <div>
                ini nav
            </div>
            {children}
        </div>
  
      </body>
    </html>
  );
}
