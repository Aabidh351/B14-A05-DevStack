import { useEffect, useState } from "react";
import type { TechType } from "../types/TechType";


const Explore = () => {
  const [tech, setTech] = useState<TechType[]>([]);

  useEffect(() => {
    const fetchTech = async () => {
      const response = await fetch("/API/tech-data.json");
      const data = await response.json();

      setTech(data);
    };

    fetchTech();
  }, []);

  console.log(tech);

  return (
    <section>
      <h2>Explore the Technologies</h2>

      <div>
        {tech.map((technology) => (
          <div key={technology.id}>
            <h3>{technology.name}</h3>
            <p>{technology.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;