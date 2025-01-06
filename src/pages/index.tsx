import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${inter.variable} ${bebas.variable} font-[family-name:var(--font-inter)] flex flex-col justify-between h-screen`}
    >
      <Header />
      <h1
        className="font-white"
      >HELLO WORLD</h1>

      <Footer />
    </div>
  );
}
