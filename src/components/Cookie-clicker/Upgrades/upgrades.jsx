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

// background
import GrandmaBck from "../Unit/UnitBackgroundAssets/GrandmaBack.png";
import FarmBck from "../Unit/UnitBackgroundAssets/FarmBack.png";
import MineBck from "../Unit/UnitBackgroundAssets/MineBack.png";
import FactoryBck from "../Unit/UnitBackgroundAssets/FactoryBack.png";
import BankBck from "../Unit/UnitBackgroundAssets/BankBack.png";
import TempleBck from "../Unit/UnitBackgroundAssets/TempleBack.png";

export { milk, chocolateMilk, strawberryMilk, Clicker };

export const upgrades = [
  {
    name: "Cursor",
    image: Clicker,
    price: 15,
    cps: 0.1,
    units: 0,

    description: "Auto clicks every 10 seconds",
  },
  {
    name: "Grandma",
    image: Grandma,
    price: 100,
    cps: 1,
    units: 0,

    description: "A nice grandma to bake more cookies",

    background: GrandmaBck,
  },
  {
    name: "Farm",
    image: Farm,
    price: 1100,
    cps: 8,
    units: 0,

    description: "Grows cookie plants from cookie seeds",
    background: FarmBck,
  },
  {
    name: "Mine",
    image: Mine,
    price: 12000,
    cps: 47,
    units: 0,

    description: "Mine out cookie dough and chocolate chips",
    background: MineBck,
  },
  {
    name: "Factory",
    image: Factory,
    price: 130000,
    cps: 260,
    units: 0,

    description: "Produce large quantity of cookies",
    background: FactoryBck,
  },
  {
    name: "Bank",
    image: Bank,
    price: 1400000,
    cps: 1400,
    units: 0,

    background: BankBck,
  },
  {
    name: "Temple",
    image: Temple,
    price: 20000000,
    cps: 7800,
    units: 0,

    background: TempleBck,
  },
];
