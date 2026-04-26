import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable:'--poppins-pont',
  subsets:["latin"],
  weight:['200','400','600','800']
})

export const metadata = {
  title: "Dragon News",
  description: "best news website in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToastContainer/>
        </body>
    </html>
  );
}
