import type { TechType } from "../types/TechType";

type TechCardProps = {
  technology: TechType;
  onAdd: (technology: TechType) => void;
  isAdded: boolean;
};

const TechCard = ({ technology, onAdd, isAdded }: TechCardProps) => {
  return (
    <div className={`rounded-xl border ${isAdded ? 'border-[#D91B7E]' : 'border-gray-200'} bg-white p-5 shadow-sm transition hover:shadow-md`}>

      <div className="flex items-center justify-between">
        <img src={technology.icon} alt={technology.name} className="h-10 w-10 object-contain"/>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-[#D91B7E]">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs">

        <span className="rounded-md bg-gray-100 px-2 py-1 text-gray-600">
          {technology.category}
        </span>
        <span className="text-gray-500">
          {technology.difficulty}
        </span>
        <span className="font-medium text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>
      <button
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-medium ${isAdded ? "cursor-not-allowed bg-pink-100 text-[#D91B7E]" : "bg-gray-900 text-white hover:bg-[#D91B7E]"}`}>
            {isAdded ? "✔ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;