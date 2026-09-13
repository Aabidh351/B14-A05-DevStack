import type { TechType } from "../types/TechType";

type TechCardProps = {
  technology: TechType;
};

const TechCard = ({ technology }: TechCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">

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
      <button className="mt-5 w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition hover:bg-[#D91B7E]">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;