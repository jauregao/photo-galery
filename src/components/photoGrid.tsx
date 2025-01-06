import { PhotoCard } from "@/components/photoCard";
import { TPokemon } from "@/types/character";

export default function PhotoGrid({ characters }: { characters: TPokemon[] }) {
  return (
    <main
      className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:max-w-screen-lg max-w-[90%] mx-auto md:gap-12 sm:gap-8 gap-4 py-12 w-full overflow-x-visible"
    >
      {
        characters.length === 0 && <h1
          className="col-start-1 col-end-5 w-full text-center text-2xl row-start-1 row-end-11 self-center"
        >{`Não foi encontrado nenhum pokémon com esse nome :(`}<br />tente outro!</h1>
      }
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
