import { PhotoCard } from "@/components/photoCard";
import { TPokemon } from "@/types/character";

export default function PhotoGrid({ characters }: { characters: TPokemon[] }) {
  return (
    <main
      className="grid grid-cols-4 max-w-screen-lg mx-auto gap-12 py-12 w-full overflow-x-visible"
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
