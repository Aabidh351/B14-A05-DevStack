import { useEffect, useState } from "react";
import type { TechType } from "../types/TechType";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

const Explore = () => {
  const [tech, setTech] = useState<TechType[]>([]);
  const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

  useEffect(() => {
    const fetchTech = async () => {
      const response = await fetch("/API/tech-data.json");
      const data = await response.json();

      setTech(data);
    };

    fetchTech();
  }, []);

  const handleAdd = (technology: TechType) => {
    setSelectedTech((previousTech) => [...previousTech,technology]);
  };

  const handleRemove = (id: string) => {
    setSelectedTech((previousTech) =>
      previousTech.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);
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