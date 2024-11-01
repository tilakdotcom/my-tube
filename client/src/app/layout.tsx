import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { VideoDataProvider } from "@/context/FetchVideo";
import Navbar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <VideoDataProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden w-screen `}
          >
            <main className=" h-full w-screen ">
              <div className="h-16 overflow-hidden">
                <Navbar />
              </div>
              <div className="h-screen">{children}</div>
            </main>
          </body>
        </html>
      </VideoDataProvider>
    </AuthProvider>
  );
}
