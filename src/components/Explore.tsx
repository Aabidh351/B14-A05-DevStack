import { use, useState } from "react";
import techPromise from "../../public/API/techPromise"
import type { TechType } from "../types/TechType";
import TechCard from "./TechCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify"

const Explore = () => {
  const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

const tech = use(techPromise);

  const handleAdd = (technology: TechType) => {
    const alreadyExists = selectedTech.some(
    (item) => item.id === technology.id
  );

  if (alreadyExists) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }
    setSelectedTech((previousTech) => [...previousTech,technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const technology = selectedTech.find(
    (item) => item.id === id
  );
    setSelectedTech((previousTech) =>
      previousTech.filter((technology) => technology.id !== id)
    );
    if (technology) {
    toast.info(`${technology.name} removed from your stack.`);
  }
  };

  const handleRemoveAll = () => {
    if (selectedTech.length === 0) {
    return;
  }
  setSelectedTech([]);
  toast.info("All technologies removed from your stack.");
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore the{" "}
            <span className="text-[#D91B7E]">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tech.map((technology) => (
            <TechCard key={technology.id} technology={technology} onAdd={handleAdd} 
            isAdded={selectedTech.some((item) => item.id === technology.id)}/>
        ))}
        </div>
        <div className="w-full lg:w-1/4">
            <YourStack selectedTech={selectedTech} removeTech={handleRemove} removeAll={handleRemoveAll}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;