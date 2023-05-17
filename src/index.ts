import { CarDirector } from "./carDirector";
import { GasCar } from "./gasCar";
import { GasCarBuilder } from "./gasCarBuilder";

const carDirector: CarDirector = new CarDirector();
const builder: CarBuilder = new GasCarBuilder();
const newGasCar: GasCar = carDirector.buildGasCar(builder)

console.log('-- new gas car', newGasCar);
