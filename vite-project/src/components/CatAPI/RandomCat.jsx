import { useEffect, useState } from "react";

export default function CatPicture() {
  const [cat, setCat] = useState(null);

  const fetchCat = async () => {
    const res = await fetch("https://catfact.ninja/facts?limit=5");
    const data = await res.json();
    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  if (!cat) return <h1>Loading...</h1>;

  return (
    <>
      <button onClick={fetchCat}>Refresh</button>
      <img src={cat.message} alt="Random cat" />
    </>
  );
}
