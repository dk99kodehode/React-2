import { useEffect, useState } from "react";

import "./Catstyling.css";

export default function CatFact() {
  const [cat, setCat] = useState(null);

  // fetches api and awaits json response, stores data in setCat(data)

  const fetchCat = async () => {
    const factres = await fetch("https://catfact.ninja/facts?limit=5");
    const Imageres = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=5",
    );

    const Catfact = await factres.json();
    const ImageData = await Imageres.json();

    setCat({
      facts: Catfact.data,
      image: ImageData[0].url,
    });
  };

  // 1 time event that fetches the data on refresh or button click
  useEffect(() => {
    fetchCat();
  }, []);

  // visst ikke cat er loadet så h1... "loading"
  if (!cat) return <h1>Loading...</h1>;

  // etter apien har renderet returner du en button med paragraph
  return (
    <>
      <div className="random-cat">
        <div className="cat-info">
          <div>
            <p className="cat-fact">
              {cat.facts[Math.floor(Math.random() * cat.facts.length)].fact}
            </p>
          </div>

          <div>
            <button className="cat-button" onClick={fetchCat}>
              Want a different fact?
            </button>
          </div>
        </div>

        <div>
          <img className="random-cat-image" src={cat.image} alt="random-cat" />
        </div>
      </div>
    </>
  );
}
