// milk upgrades
import milk from "./milk.png";
import chocolateMilk from "./chocolateMilk.png";
import strawberryMilk from "./strawberryMilk.png";

// clicker upgrads
import Clicker from "./Cursor.png";
import Grandma from "./Grandma.png";
import Farm from "./Farm.png";
import Mine from "./Mine.png";

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
];
