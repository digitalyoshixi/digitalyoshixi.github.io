import "./globals.css";
import localFont from 'next/font/local'


const acme = localFont({
  src : "./fonts/acme.ttf",
  variable : "--font-acme",
})

const sourgummy = localFont({
  src : "./fonts/sourgummy.ttf",
  variable : "--font-sourgummy",
})

export const metadata = {
  title: "Yoshixis Web",
  description: "Hi, im David. This is my interweb page filled with games and blog posts and awesome gifs.",
  url : "https://www.yoshixi.net"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${acme.variable} ${sourgummy.variable} antialiased`}

      >
        {children}
      </body>
    </html>
  );
}
