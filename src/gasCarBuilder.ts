
import { GasCar } from './gasCar';

export class GasCarBuilder implements CarBuilder {
  private car: GasCar;

  constructor() {
    this.car = new GasCar();
  }

  setModel(model: string): void {
    this.car.model = model;
  }

  setColor(color: string): void {
    this.car.color = color;
  }

  setTransmission(transmission: string): void {
    this.car.transmission = transmission;
  }

  setGPS(hasGPS: boolean): void {
    this.car.hasGPS = hasGPS;
  }

  setSolarRoof(hasSolarRoof: boolean): void {
    this.car.hasSolarRoof = hasSolarRoof;
  }

  setHeatedSeat(hasHeatedSeat: boolean): void {
    this.car.hasHeatedSeat = hasHeatedSeat;
  }

  build(): GasCar {
    return this.car;
  }

  reset(): void {
    this.car = new GasCar();
  }
}
