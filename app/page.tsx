"use client";

// Imports do React e AOS
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components Imports
import Image from "next/image";
import Header from "@/components/Header";
import EducationCard from '@/components/cards/EducationCard';
import ExtensionCard from "@/components/cards/ExtensionCard";
import SkillCard from "@/components/cards/SkillCard";
import ProjectCard from "@/components/cards/ProjectCard";

// CSS Import
import './globals.css';

// Icons Imports
import { GraduationCap, SquareCode, AtSign, Palette, Clock9 } from "lucide-react";
import { 
  SiAngular, SiBootstrap, SiCplusplus, SiFigma, SiGit, SiJavascript, SiMysql, 
  SiNextdotjs, SiPhp, SiPython, SiReact, SiTailwindcss, SiTypescript 
} from "react-icons/si";
import { FaInstagram, FaJava, FaWhatsapp } from "react-icons/fa";
import { LuGithub, LuLinkedin } from "react-icons/lu";

import GitHubButton from "@/components/button/GitHubButtton"; 
import LinkedinButton from "@/components/button/LinkedinButton"; 

export default function Home() {

  // Inicializa o AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação em ms
      once: true, // anima apenas na primeira vez que aparece
      offset: 120, // distância do scroll para ativar
      easing: "ease-out",
    });
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50" id="top">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <Header />

        {/* Seção de Apresentação */}
        <section className="mb-16" data-aos="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-28 px-6 md:px-0">

            {/* Coluna da esquerda */}
            <div className="text-left md:text-left max-w-xl" data-aos="fade-right">
              <h4 className="text-blue-700 font-bold text-lg uppercase tracking-wide mb-2">
                Hello Word
              </h4>
              <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 mb-2">
                Eu sou <span className="text-blue-700">Bianca</span>,
              </h1>
              <h2 className="text-lg md:text-xl text-gray-500 font-semibold mb-6">
                Desenvolvedora Fullstack.
              </h2>
              <p className="text-stone-900 leading-relaxed mb-8">
                Desde 2019, venho trilhando meu caminho na área de Computação, sempre movida pela curiosidade e paixão por tecnologia. 
                Adoro transformar ideias em soluções através da programação e trabalhar em projetos que me desafiam a aprender mais. 
                Hoje, busco oportunidades para crescer, criar e fazer a diferença como desenvolvedora.
              </p>
            </div>

            {/* Coluna da direita - Imagem com botões sobrepostos */}
            <div className="relative flex justify-center items-center md:w-[420px] md:h-[420px]" data-aos="zoom-in">
              <div className="absolute inset-0 rounded-full border-2 border-gray-50"></div>
              <Image
                src="/icons/Icon.svg"
                alt="Bianca"
                width={400}
                height={400}
                className="z-10 object-contain"
              />
              <GitHubButton icon={LuGithub} />
              <LinkedinButton icon={LuLinkedin} />
            </div>
          </div>
        </section>
        
        {/* Seção de Habilidades */}
        <section className="mb-16" id="habilidades" data-aos="fade-up">

        <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing ">Habilidades</h2>
          
          <div className="space-y-4 md:space-y-6">
            {/* Linha 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-6">
              <SkillCard icon={SiAngular} name="Angular"link="" />
              <SkillCard icon={SiBootstrap} name="Bootstrap" link=""/>
              <SkillCard icon={SiCplusplus} name="C++"link="" />
              <SkillCard icon={SiFigma} name="Figma"link="" />
              <SkillCard icon={SiGit} name="Git"link="" />
              <SkillCard icon={FaJava} name="Java"link="" />
              <SkillCard icon={SiJavascript} name="JavaScript" link=""/>
              <SkillCard icon={Clock9} name="Metodologias" link=""/>
              <SkillCard icon={SiMysql} name="MySQL" link=""/>
              <SkillCard icon={SiNextdotjs} name="Next.js" link=""/>
              <SkillCard icon={SiPhp} name="PHP" link=""/>
              <SkillCard icon={SiPython} name="Python" link=""/>
              <SkillCard icon={SiReact} name="React.js" link=""/>
              <SkillCard icon={SiTailwindcss} name="Tailwind CSS"link="" />
              <SkillCard icon={SiTypescript} name="TypeScript"link="" />
            </div>
          </div>
        </section>
        
        {/* Seção de Educação */}
        <section className="mb-12" id="experiencias" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing ">Experiências</h2>
          <h4 className="text-base text-center font-bold text-blue-700 mb-6 section-spacing ">FORMAÇÃO ACADÊMICA</h4>
          
          <div className="space-y-6">
            <EducationCard 
              title="Bacharelado em Ciências da Computação - Instituto Federal de São Paulo (IFSP)"
              period="2022 - 2026"
              icon={GraduationCap}
            />
            
            <EducationCard 
              title="Técnico em Informática para Internet - Escola Técnica Estadual (ETEC)"
              period="2018 - 2021"
              icon={GraduationCap}
            />
          </div>
        </section>

        {/* Seção de Extensões */}
        <section className="mb-16" data-aos="fade-up">
          <h4 className="text-base text-center font-bold text-blue-700 mb-6 section-spacing ">EXTENSÕES</h4>
          
          <div className="space-y-6">
            <ExtensionCard 
              title="Projeto de Extensão - IF + Empreendedor : Desenvolvimento de um ERP para produtores de café"
              period="Out/2024 - Fev/2025"
              description="Desenvolvimento de sistema web utilizando Spring Boot e Angular, com integração a banco de dados MySQL. Aplicação de boas práticas de código, versionamento com Git e realização de revisões em equipe. Participação ativa em squad ágil, utilizando metodologias Scrum e Kanban."
              icon={SquareCode}
              link=""
            />
            
            <ExtensionCard 
              title="Diretora de Comunicação - Associação Acadêmica Atlética Arthur Chiodi"
              period="Jan/2023 - Dez/2025"
              description="Trabalho voluntário na Atlética Arthur Chiodi, com atuação nas áreas de comunicação e gestão de redes sociais, contribuindo para a criação de artes para posts, aumento do engajamento do público e organização de campanhas e eventos."
              icon={AtSign}
              link=""
            />

            <ExtensionCard 
              title="Concurso Cultural – Criação do Logotipo Oficial do Curso de Ciência da Computação"
              period="Out/2024"
              description="Vencedora do concurso cultural de criação do logotipo oficial do curso de Ciência da Computação, com arte escolhida por votação entre alunos e egressos. O design foi selecionado por representar a identidade visual do curso, passando a ser utilizado oficialmente em materiais acadêmicos e institucionais."
              icon={Palette}
              link="LINK PARA MATÉRIA"
            />
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <section className="relative flex flex-col md:flex-row items-center justify-center gap-36  md:py-16 bg-gray-50 overflow-hidden" id="sobre">
          
          {/* Coluna da Esquerda - Foto */}
          <div className="relative inline-block" data-aos="fade-right">

            <Image
              src="/icons/Foto1.png"
              alt="Bianca"
              width={400}
              height={400}
              className="object-cover w-[290px] md:w-[320px] lg:w-[360px] h-auto rounded-2xl min-w-[290px] min-h-[290px]"
            />

            <span className="absolute bottom-4 right-0">
              <Image
                src="/icons/Flower.svg"
                alt="Flor"
                width={120}
                height={120}
                className=""
              />
            </span>
          </div>

          {/* Coluna da Direita - Texto */}
          <div className="max-w-xl text-left md:text-left" data-aos="fade-left">
              <h2 className="relative flex items-center gap-2 text-3xl font-extrabold text-stone-950 mb-4">
                Sobre <span className="text-blue-700 ml-1">Mim</span>!
                <Image
                  src="/icons/Star.svg"
                  alt="Estrela"
                  width={100}
                  height={100}
                  className="ml-2 md:ml-4 w-[100px] md:w-[100px] h-auto"
                />
              </h2>
            <br />
            <p className="text-stone-900 leading-relaxed mb-4">
              Oi! Tenho 21 anos e comecei a programar aos 14, quando entrei no curso técnico em Informática. Desde então, venho estudando e me apaixonando cada vez mais por tecnologia. Hoje estou finalizando o bacharelado em Ciência da Computação e já sou formada como Técnica em Informática para Internet, o que me deu uma ótima base em desenvolvimento back-end e front-end. Adoro explorar novas linguagens, aprender ferramentas diferentes e me desafiar em projetos que me tirem da zona de conforto. Sou curiosa por natureza e estou sempre em busca de evoluir como desenvolvedora.
            </p>

            <p className="text-stone-900 leading-relaxed">
              Fora da programação, sou super comunicativa e gosto de conversar sobre praticamente qualquer assunto! Meus hobbies incluem ouvir música e jogar — coisas que me ajudam a relaxar e manter a criatividade sempre em alta.
            </p>
          </div>
        </section>

         {/* Seção de Educação */}
        <section className="mb-18" id="projetos" data-aos="fade-up">
          <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing ">Projetos</h2>

          <div className="space-y-6">
           <ProjectCard 
              numero="01"
              title="TrashTrack - Aplicativo para Reportagem e Geolocalização de Lixos"
              description={
                <>
                  <b>Trashtrack</b> é um sistema desenvolvido para ajudar recicladores e coletores de lixo a se organizarem de forma mais eficiente, otimizando rotas e poupando tempo. 
                  Criado com <b>Java</b>, <b>JavaScript</b>, <b>JQuery</b>, <b>Servlets</b> e <b>MariaDB</b>, o projeto foi desenvolvido em equipe o que proporcionou uma forte vivência com metodologias ágeis como <b>Scrum</b> e <b>Kanban</b>, atuei como <b>desenvolvedora</b> e na elaboração dos <b>protótipos</b>.
                </>
              }
              image="/icons/Trash.svg"
              icon={SiFigma}
              link="https://www.figma.com/design/W5WVOLtIsRFzkVZR78Yqb6/Prot%C3%B3tipos-TrashTrack?m=auto&t=K8pvQLPGMdz54fp6-6"
            />

            <ProjectCard 
              numero="02"
              title="Contrack - Aplicativo de Gerenciamento de Contratos de Radiodifusão"
              description={
                <>
                  <b>Contrack</b> é uma ferramenta em desenvolvimento para auxiliar na gestão de contratos da Rádio 92.1 de São João da Boa Vista.
                  O projeto faz parte de uma iniciativa da faculdade onde atuamos como uma software house, e nele atuo como <b>desenvolvedora</b>, e fui a responsavel pela <b>identidade visual</b> do projeto, nele utilizamos principalmente <b>JavaScript</b> e <b>PHP</b>, aplicando metodologias ágeis como <b>Scrum</b> e <b>Kanban</b> ao longo do processo.
                </>
              }
              image="/icons/Contrack.svg"
              links={[
                { icon: SiFigma, url: "https://www.figma.com/design/OuwSU8gz2II3rQ0B9uVj7e/Identidade-Visual-Projeto-Integrador?m=auto&t=K8pvQLPGMdz54fp6-6" },
                { icon: LuGithub, url: "https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025" },
              ]}
            />

            <ProjectCard 
              numero="03"
              title="TCC - Cat’s Village: Desenvolvimento de um cozy game 2D utilizando a engine Godot."
              description={
                <>
                  <b>Cat’s Village</b> é um jogo 2D do gênero cozy desenvolvido individualmente como <b>Trabalho de Conclusão de Curso</b>, com foco em criar 
                  uma experiência imersiva e acolhedora. Utilizei a <b>Godot Engine</b> e ferramentas de <b>edição visual</b> e <b>sonora</b> para construir um protótipo funcional com mecânicas simples e ambientação relaxante.
                </>
              }
              image="/icons/Cat.png"
              icon={LuGithub}
              link="https://github.com/BiaLoure/Jogo"
            />
          </div>
        </section>


        {/* Seção de Contato */}
        <section className="" id="contato">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 ">
            
            {/* Coluna Esquerda */}
            <div className="max-w-lg text-left md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3 ">
                
                <h2 className="text-3xl  font-extrabold text-stone-950 mt-20">
                    Entre em <span className="text-blue-700">Contato</span>!
                </h2>
                <Image
                  src="/icons/Star.svg"
                  alt="Estrela decorativa"
                  width={100}
                  height={100}
                  className="top-3 right-75"
                />
                
              </div>

              <p className="text-stone-950 text-sm leading-relaxed my-6 ">
                Estou sempre aberta a novas oportunidades e desafios como desenvolvedora!
              </p>
              
              <p className="font-semibold text-stone-950 my-4">
                biancaemilylourenco@gmail.com
              </p>
              <p className="font-semibold text-stone-950 mb-8">
                (19) 99274-3961
              </p>
            </div>

            {/* Coluna Direita - Ícones */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-6 md:mr-0">
              <SkillCard icon={FaWhatsapp} name="Whatsapp"link="https://wa.me/5519992743961" />
              <SkillCard icon={LuGithub} name="GitHub"link="https://github.com/BiaLoure" />
              <SkillCard icon={LuLinkedin} name="LinkedIn"link="https://www.linkedin.com/in/bianca-emily-louren%C3%A7o/" />
              <SkillCard icon={FaInstagram} name="Instagram"link="https://www.instagram.com/bianca.e.ll/" /> 
            </div>
          </div>

          {/* Rodapé Azul */}
          
        </section>




      </div>
      <div className="mt-16 bg-blue-700 text-white py-6 flex flex-col md:flex-row items-center justify-between  2xl:px-54 xl:px-24 lg:px-10 md:px-8 px-4 ">
            <h3 className="font-bold text-xl">Bianca.</h3>
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full text-sm shadow-sm hover:bg-gray-100 transition-all">
              <a
                href="https://github.com/BiaLoure/Portifolio" 
                target="_blank"
                rel="noopener noreferrer" 
              >
                Acessar Projeto
              </a>
            </button>
            <p className="font-semibold text-sm mt-4 md:mt-0">Feito com Next.js e Tailwind CSS</p>
          </div>
    </main>
  );
}
