/**
 * GIVEN a CarDirector, WHEN buildGasCar() is called THEN a GasCar should be returned
 */

import { CarDirector } from "../carDirector";
import { GasCar } from "../gasCar";
import { GasCarBuilder } from "../gasCarBuilder";

describe('Testing CarDirector class using a GasCarBuilder', () => {
  let carDirector: CarDirector
  let builder: CarBuilder
  let gasCar: GasCar

  beforeAll(() => {
    carDirector = new CarDirector()
    builder = new GasCarBuilder
    gasCar = carDirector.buildGasCar(builder)
  });

  test('GIVEN a CarDirector, WHEN buildGasCar() is called THEN a GasCar should be returned', () => {
    expect(gasCar).toBeInstanceOf(GasCar);
  });
});
