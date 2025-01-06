import { PhotoCard } from "@/components/photoCard";
import { TPokemon } from "@/types/character";

export default function PhotoGrid({ characters }: { characters: TPokemon[] }) {
  return (
    <main
      className="grid grid-cols-3 grid-rows-3 max-w-screen-lg mx-auto gap-8 py-8 "
    >
      {
        characters?.map(character => {
          return (
            <PhotoCard key={character.id} pokemon={character} />
          )
        })
      }
    </main>
  )
}
