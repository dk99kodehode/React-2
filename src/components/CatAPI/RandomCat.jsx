import { useEffect, useState } from "react";

export default function CatFact() {
  const [cat, setCat] = useState(null);

  // fetches api and awaits json response, stores data in setCat(data)

  const fetchCat = async () => {
    const res = await fetch("https://catfact.ninja/facts?limit=5");
    const data = await res.json();
    setCat(data);
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
      <button onClick={fetchCat}>Want a different fact?</button>
      <p>{cat.data[Math.floor(Math.random() * cat.data.length)].fact}</p>
    </>
  );
}
