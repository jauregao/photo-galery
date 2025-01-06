import Footer from "@/components/footer";
import Header from "@/components/header";
import PhotoGrid from "@/components/photoGrid";
import { Inter, Bebas_Neue } from "next/font/google";
import { getStaticProps } from "@/services/request";
import { TPokemon } from "@/types/character";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export default function Home({ characters }: { characters: TPokemon[] }) {
  return (
    <div
      className={`${inter.variable} ${bebas.variable} font-[family-name:var(--font-inter)] flex flex-col justify-between h-full bg-[url(/background.svg)] bg-cover w-[100svw]`}
    >
      <Header />
      <PhotoGrid characters={characters} />
      <Footer />
    </div>
  );
}

export { getStaticProps };