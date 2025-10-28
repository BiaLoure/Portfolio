
import { GraduationCap } from "lucide-react";

export default function CurriculoButton({ icon: Icon = GraduationCap}) {
  return (
     <button className="bg-blue-700 text-white px-6 py-3 font-extralight rounded-full shadow-sm hover:bg-blue-600 transition-colors flex items-center gap-2">
                {/* <Download className="w-4 h-4" /> */}
                Currículo
                <Icon className="w-5 h-5 text-white"  />
    </button>
  );
}