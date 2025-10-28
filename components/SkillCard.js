import { SiPython } from "react-icons/si";


const SkillCard = ({  icon:Icon = SiPython, name }) => {
  return (
    <div className={`group bg-white border-blue-700 border-2 rounded-3xl p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-3 hover:bg-blue-700 hover:shadow-lg hover: transition-all cursor-pointer aspect-square  `}>
      <Icon className="w-12 h-12 text-blue-700 transition-colors group-hover:text-white" />
      <span className="text-sm font-medium text-gray-700 text-center transition-colors group-hover:text-white">{name}</span>
    </div>
  );
};
    
export default SkillCard;