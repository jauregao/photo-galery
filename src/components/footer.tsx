import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[--footer-background] p-4"
    >
      <div
        className="max-w-screen-lg mx-auto"
      >
        <div
          className="flex justify-center gap-4"
        >
          <Image
            alt="logo Amanda Jauregui"
            src="/logo.svg"
            width={15}
            height={15}
          />
          <span
            className="block w-max text-center md:text-sm text-[12px]"
          >
            Amanda de Oliveira © 2024 Galeria de Fotos. Todos os direitos reservados.
          </span>
          <Image
            alt="logo Amanda Jauregui"
            src="/logo.svg"
            width={15}
            height={15}
          />
        </div>
      </div>
    </footer>
  )
}