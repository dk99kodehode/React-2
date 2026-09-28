import { useEffect, useState } from "react";
import "./Catstyling.css";

export default function CatFact() {
  const [fact, setFact] = useState("");

  const fetchCat = async () => {
    try {
      const response = await fetch("https://catfact.ninja/facts?limit=5");

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      const randomFact =
        data.data[Math.floor(Math.random() * data.data.length)];

      setFact(randomFact.fact);
    } catch (error) {
      console.error("Failed to fetch cat facts:", error);
    }
  };

  useEffect(() => {
    fetchCat();

    const interval = setInterval(fetchCat, 10000);

    return () => clearInterval(interval);
  }, []);

  return <p className="cat-fact">{fact}</p>;
}
