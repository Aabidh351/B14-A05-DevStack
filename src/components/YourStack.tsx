import type { TechType } from "../types/TechType";

type YourStackProps = {
  selectedTech: TechType[];
  removeTech: (id: string) => void;
  removeAll: () => void;
};

const YourStack = ({ selectedTech,removeTech,removeAll }: YourStackProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm w-full md:w-sm">

      <h3 className="text-xl font-semibold text-gray-900">
        Your Stack
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {selectedTech.length}{" "}
        {selectedTech.length === 1
          ? "Technology"
          : "Technologies"}{" "}
        Selected
      </p>

      <div className="mt-5 space-y-3">

        {selectedTech.length === 0 ? (
          <p className="py-8 text-center text-sm text-gray-400">
            No technologies selected yet.
          </p>
        ) : (
          selectedTech.map((technology) => (
            <div key={technology.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">

              <div className="flex items-center gap-3">
                <img src={technology.icon} alt={technology.name} className="h-8 w-8 object-contain"/>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {technology.name}
                  </h4>

                  <p className="text-xs text-gray-400">
                    {technology.category}
                  </p>
                </div>

              </div>

              <button onClick={() => removeTech(technology.id)} className="text-xl text-gray-400 transition hover:text-red-500">
                ×
              </button>

            </div>
          ))
        )}

      </div>

      {selectedTech.length > 0 && (
        <button onClick={removeAll} className="mt-5 w-full rounded-lg border border-red-200 py-2 text-sm text-red-500 transition hover:bg-red-50">
          Remove All
        </button>
      )}

    </div>
  );
};

export default YourStack;