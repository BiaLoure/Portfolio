import { GraduationCap } from "lucide-react";

export default function ExtensionCard({ title, period, description, icon: Icon = GraduationCap, link }) {
  return (
    <div className="bg-white border-2 border-stone-950 rounded-3xl p-6 flex items-start justify-between shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-1">
        <h3 className="font-bold text-blue-700 mb-1">{title}</h3>
        <p className="italic text-stone-950 text-base mb-3">{period}</p>
        <p className="text-stone-950 text-sm leading-relaxed">{description}</p>
        <a href="https://www.sbv.ifsp.edu.br/component/content/article/138-noticias-publicadas/pagina-inicial/arquivadas/2034-alunos-do-bacharelado-em-ci%C3%AAncia-da-computa%C3%A7%C3%A3o-participam-de-concurso-cultural" target="_blank" className="font-bold text-blue-600 visited:text-purple-600 underline underline-offset-4">{link}</a>
      </div>
      
      <div className="bg-white border-2 border-stone-950 rounded-full w-14 h-14 flex items-center justify-center ml-4  p-2">
        <Icon className="w-6 h-6 text-blue-700" />
      </div>
      
    </div>
  );
}