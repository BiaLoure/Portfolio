
import { GraduationCap } from "lucide-react";

export default function EducationCard({ title, period, icon: Icon = GraduationCap}) {
  return (
    <div className="bg-blue-700 text-white rounded-3xl p-6 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="italic font-bold text-blue-200 text-sm">{period}</p>
      </div>
         <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center ml-4 p-2">
        <Icon className="w-6 h-6 text-blue-700" />
      </div>
      
    </div>
  );
}