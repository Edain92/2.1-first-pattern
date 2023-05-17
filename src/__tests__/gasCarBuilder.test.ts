/**
 * GIVEN a gasBuilder, WHEN setModel(model): void is called THEN it should assign to car the right value
 * GIVEN a gasBuilder, WHEN setColor(color): void is called THEN it should assign to car the right value
 * GIVEN a gasBuilder, WHEN setTransmission(transmission): void is called THEN it should assign to car the right value
 * GIVEN a gasBuilder, WHEN setGPS(): void is called THEN it should assign to car the right value
 * GIVEN a gasBuilder, WHEN setSolarRoof(): void is called THEN it should assign to car the right value
 * GIVEN a gasBuilder, WHEN setHeatedSeat(): void is called THEN it should assign to car the right value
 * GIVEN a gasBuilder, WHEN build(): GasCar is called THEN it should return a Car with the properties added
 * GIVEN a gasBuilder, WHEN reset() is called THEN it should return an empty Car
 */

import { GasCarBuilder } from '../gasCarBuilder'
import { GasCar } from '../gasCar'

describe('Testing GasCarBuilder class', () => {
  let builder: GasCarBuilder;

  beforeEach(() => {
    builder = new GasCarBuilder();
  });

  it('GIVEN a gasBuilder, WHEN build() is called THEN it should return a Car', () => {
    const car: GasCar = builder.build();
    expect(car).toBeInstanceOf(GasCar);
  });

  it('GIVEN a gasBuilder, WHEN reset() is called THEN it should return an empty Car', () => {
    const car: GasCar = builder.build();
    builder.reset();
    expect(car).toBeInstanceOf(GasCar);
    expect(car.model).toBe('');
  });

  it('GIVEN a gasBuilder, WHEN setModel(model): void is called THEN it should assign to car the right value', () => {
    builder.setModel('model');
    const car: GasCar = builder.build();

    expect(car.model).toBe('model');
  });

  it('GIVEN a gasBuilder, WHEN setColor(color): void is called THEN it should assign to car the right value', () => {
    builder.setColor('white');
    const car: GasCar = builder.build();

    expect(car.color).toBe('white');
  });

  it('GIVEN a gasBuilder, WHEN setColor(color): void is called THEN it should assign to car the right value', () => {
    builder.setTransmission('manual');
    const car: GasCar = builder.build();

    expect(car.transmission).toBe('manual');
  });

  it('GIVEN a gasBuilder, WHEN setGPS(): void is called THEN it should assign to car the right value (true)', () => {
    builder.setGPS(true);
    const car: GasCar = builder.build();

    expect(car.hasGPS).toBe(true);
  });

  it('GIVEN a gasBuilder, WHEN setSolarRoof(): void is called THEN it should assign to car the right value (true)', () => {
    builder.setSolarRoof(true);
    const car: GasCar = builder.build();

    expect(car.hasSolarRoof).toBe(true);
  });

  it('GIVEN a gasBuilder, WHEN setHeatedSeat(): void is called THEN it should assign to car the right value (false)', () => {
    builder.setHeatedSeat(false);
    const car: GasCar = builder.build();

    expect(car.hasHeatedSeat).toBe(false);
  });
});

