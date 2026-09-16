// milk upgrades
import milk from "./milk.png";
import chocolateMilk from "./chocolateMilk.png";
import strawberryMilk from "./strawberryMilk.png";

// units / buildings
import Clicker from "./buildings/Cursor.png";
import Grandma from "./buildings/Grandma.png";
import Farm from "./buildings/Farm.png";
import Mine from "./buildings/Mine.png";
import Factory from "./buildings/Factory.png";

export { milk, chocolateMilk, strawberryMilk, Clicker };

export const upgrades = [
  {
    name: "Cursor",
    image: Clicker,
    price: "15$",
  },
  {
    name: "Grandma",
    image: Grandma,
    price: "100$",
  },
  {
    name: "Farm",
    image: Farm,
    price: "1,100$",
  },
  {
    name: "Mine",
    image: Mine,
    price: "12,000$",
  },
  {
    name: "Factory",
    image: Factory,
    price: "130,000$",
  },
];
