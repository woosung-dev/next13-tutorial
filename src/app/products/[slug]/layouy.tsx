import './globals.css'

export const metadata = {
  title: 'pages titles pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>HD</h1>
          <nav>
            <a href="/">a</a>
            <a href="/">b</a>
          </nav>
        </header>
        {children}</body>
    </html>
  )
}
