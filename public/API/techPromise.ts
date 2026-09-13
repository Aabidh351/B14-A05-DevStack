import type { TechType } from "../../src/types/TechType";

const techPromise: Promise<TechType[]> = fetch("/API/tech-data.json")
  .then((response) => response.json());

export default techPromise;