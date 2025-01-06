import { TPokemon } from "@/types/character";
import { motion } from "framer-motion";
import Image from "next/image";

export function PhotoCard({ pokemon }: { pokemon: TPokemon }) {
  return (
    <motion.div
      className="opacity-90 w-full mx-auto flex flex-col"
      whileHover={{
        scale: 1.2,
        opacity: 1,
        position: "relative",
        zIndex: 99,
        color: "#fff",
        fontWeight: "bold",
      }}
      transition={{
        duration: 0.2
      }}

    >
      <motion.div
        className="w-full mx-auto p-4 bg-[--foreground] rounded-xl"
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, 5, -5, 5, -5, 0],
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
          border: "4px solid var(--secondary)",
        }}
        transition={{
          duration: 0.2
        }}
      >

        <Image
          className="w-full h-auto opacity-100"
          alt={`${pokemon.name} photo.`}
          src={pokemon.photo}
          width={100}
          height={100}
          quality={100}
        />
      </motion.div>
      <span
        className="text-center w-full pt-2"
      >{pokemon.name.toUpperCase()}</span>
    </motion.div>
  )
}