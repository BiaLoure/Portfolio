import Image from "next/image";
import { Download } from "lucide-react";
import CurriculoButton from "@/components/CurriculoButton";

export default function Header() {
  return (
    <header className="bg-gray-50/70 backdrop-blur-md sticky top-0 z-50 ">
      <nav className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/icons/Bianca.svg"
              alt="Bianca"
              width={48}
              height={48}
              className="w-22 h-22"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 border border-stone-950 rounded-3xl px-6 py-3 shadow-sm transition-shadow" >
            <a href="#habilidades" className="text-stone-950 hover:text-gray-700 transition-colors text-base">Habilidades</a>
            <a href="#experiencias" className="text-stone-950 hover:text-gray-700 transition-colors">Experiências</a>
            <a href="#sobre" className="text-stone-950 hover:text-gray-7000 transition-colors">Sobre mim</a>
            <a href="#projetos" className="text-stone-950 hover:text-gray-700 transition-colors">Projetos</a>
            <a href="#contato" className="text-stone-950 hover:text-gray-700 transition-colors">Contato</a>
          </div>

          <CurriculoButton icon={Download} />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-0">
        
        {/* Coluna da esquerda */}
        <div className="text-center md:text-left max-w-xl">
          <h4 className="text-blue-700 font-bold text-sm uppercase tracking-wide mb-2">
            Hello Word
          </h4>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 mb-2">
            Eu sou <span className="text-blue-700">Bianca</span>,
          </h1>
          <h2 className="text-lg md:text-xl text-gray-500 font-semibold mb-6">
            Desenvolvedora Fullstack.
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Desde 2019, venho trilhando meu caminho na área de Computação, sempre movida pela curiosidade e paixão por tecnologia. 
            Adoro transformar ideias em soluções através da programação e trabalhar em projetos que me desafiam a aprender mais. 
            Hoje, busco oportunidades para crescer, criar e fazer a diferença como desenvolvedora.
          </p>

        </div>

        {/* Coluna da direita - Imagem com botões sobrepostos */}
        <div className="relative flex justify-center items-center w-[260px] h-[260px] md:w-[420px] md:h-[420px]">
          {/* Círculo decorativo */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-700"></div>

          {/* Imagem */}
          <Image
            src="/icons/Bianca.svg"
            alt="Bianca"
            width={400}
            height={400}
            className="z-10 object-contain"
          />

          {/* Botão GitHub - canto superior esquerdo */}
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:opacity-90 transition z-20"
          >
            <FaGithub size={16} />
            Github
          </a>

          {/* Botão LinkedIn - canto inferior direito */}
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-blue-800 transition z-20"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

    </header>
  );
}
