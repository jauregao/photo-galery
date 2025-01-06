import { TPokemon } from "@/types/character";
import { motion } from "framer-motion";
import Image from "next/image";

export function PhotoCard({ pokemon }: { pokemon: TPokemon }) {
  return (
    <motion.div
      className="opacity-80 w-40 mx-auto flex flex-col"
      whileHover={{
        scale: 1.2,
        opacity: 1,
        position: "relative",
        zIndex: 99
      }}
      transition={{
        duration: 0.4
      }}
    >
      <motion.div
        className="w-40 mx-auto p-4 bg-[--foreground] rounded-xl"
        whileHover={{
          rotate: 360,
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
          background: "--secondary"
        }}
        transition={{
          duration: 0.4
        }}
      >
        <Image
          className="w-full h-auto"
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