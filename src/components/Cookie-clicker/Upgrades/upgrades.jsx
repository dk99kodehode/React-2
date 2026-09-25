// milk upgrades
import milk from "../Unit/Milk/milk.png";
import chocolateMilk from "../Unit/Milk/chocolateMilk.png";
import strawberryMilk from "../Unit/Milk/strawberryMilk.png";

// units - buildings
import Clicker from "../Unit/Buildings/cursor.png";
import Grandma from "../Unit/Buildings/Grandma.png";
import Farm from "../Unit/Buildings/Farm.png";
import Mine from "../Unit/Buildings/Mine.png";
import Factory from "../Unit/Buildings/Factory.png";

import Bank from "../Unit/Buildings/Bank.png";
import Temple from "../Unit/Buildings/Temple.png";

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

  {
    name: "Bank",
    image: Bank,
    price: "🍪1.4 million",

    cps: 1400,
    units: 0,
  },

  {
    name: "Temple",
    image: Temple,
    price: "🍪20 million",

    cps: 7800,
    units: 0,
  },
];
