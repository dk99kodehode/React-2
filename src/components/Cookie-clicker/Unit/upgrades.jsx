// milk upgrades
import milk from "./Milk/milk.png";
import chocolateMilk from "./Milk/chocolateMilk.png";
import strawberryMilk from "./Milk/strawberryMilk.png";

// units - buildings
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
    price: "🍪15",

    cps: 0.1,
    units: 0,
  },
  {
    name: "Grandma",
    image: Grandma,
    price: "🍪100",

    cps: 1,
    units: 0,
  },
  {
    name: "Farm",
    image: Farm,
    price: "🍪1,100",

    cps: 8,
    units: 0,
  },
  {
    name: "Mine",
    image: Mine,
    price: "🍪12,000",

    cps: 47,
    units: 0,
  },
  {
    name: "Factory",
    image: Factory,
    price: "🍪130,000",

    cps: 260,
    units: 0,
  },
];
