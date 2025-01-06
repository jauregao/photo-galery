import Footer from "@/components/footer";
import Header from "@/components/header";
import PhotoGrid from "@/components/photoGrid";
import { Inter, Bebas_Neue } from "next/font/google";
import { getStaticProps } from "@/services/request";
import { TPokemon } from "@/types/character";
import SearchBar from "@/components/searchBar";
import { useState } from "react";

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div
      className={`${inter.variable} ${bebas.variable} font-[family-name:var(--font-inter)] flex flex-col min-h-screen h-full bg-[url(/background.svg)] bg-cover w-[100svw]`}
    >
      <Header />
      <div
        className="flex-grow flex flex-col justify-start items-start py-20 h-full"
      >
        <SearchBar setSearchQuery={handleSearch} />
        <PhotoGrid characters={filteredCharacters} />
      </div>
      <Footer />
    </div>
  );
}

export { getStaticProps };