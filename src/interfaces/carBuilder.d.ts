interface CarBuilder {
  setModel(model: string): void
  setColor(color: string): void
  setTransmission(transmission: string): void
  setGPS(hasGPS: boolean): void
  setSolarRoof(hasSolarRoof: boolean): void
  setHeatedSeat(hasHeatedSeat: boolean): void
  build(): GasCar
  reset(): void
}