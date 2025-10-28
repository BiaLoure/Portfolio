import EducationCard from '@/components/EducationCard';
import ExtensionCard from '@/components/ExtensionCard';
import './globals.css';
import { GraduationCap, SquareCode, AtSign  } from "lucide-react";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Seção de Educação */}
        <section className="mb-12">
          <h2 className="text-3xl text-center font-bold text-stone-950 mb-6 section-spacing ">Experiências</h2>
          <h4 className="text-base text-center font-bold text-blue-700 mb-6 section-spacing ">FORMAÇÃO ACADÊMICA</h4>
          
          <div className="space-y-4">
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
        <section>
          <h4 className="text-base text-center font-bold text-blue-700 mb-6 section-spacing ">EXTENSÕES</h4>
          
          <div className="space-y-4">
            <ExtensionCard 
              title="Projeto de Extensão - IF + Empreendedor : Desenvolvimento de um ERP para produtores de café"
              period="Out/2024 - Fev/2025"
              description="Desenvolvimento de sistema web utilizando Spring Boot e Angular, com integração a banco de dados MySQL. Aplicação de boas práticas de código, versionamento com Git e realização de revisões em equipe. Participação ativa em squad ágil, utilizando metodologias Scrum e Kanban."
              icon={SquareCode}
         
            />
            
            <ExtensionCard 
              title="Diretora de Comunicação - Associação Acadêmica Atlética Arthur Chiodi"
              period="Jan/2023 - Dez/2025"
              description="Trabalho voluntário na Atlética Arthur Chiodi, com atuação nas áreas de comunicação e gestão de redes sociais, contribuindo para a criação de artes para posts, aumento do engajamento do público e organização de campanhas e eventos."
              icon={AtSign}
   
            />

            <ExtensionCard 
              title="Concurso Cultural – Criação do Logotipo Oficial do Curso de Ciência da Computação"
              period="Out/2024"
              description="Vencedora do concurso cultural de criação do logotipo oficial do curso de Ciência da Computação, com arte escolhida por votação entre alunos e egressos. O design foi selecionado por representar a identidade visual do curso, passando a ser utilizado oficialmente em materiais acadêmicos e institucionais."
              icon={AtSign}
            
            />
          </div>
        </section>

      </div>
    </main>
  );
}
