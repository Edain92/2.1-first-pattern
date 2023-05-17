/**
 * GIVEN a gasCar, WHEN created THEN it should have the right default properties
 */

import { GasCar } from '../gasCar'

describe('Testing gasCar class', () => {
  let gasCar: GasCar

  beforeAll(() => {
    gasCar = new GasCar()
  });

  test('GIVEN a GasCar, WHEN is created THEN it should have the right properties', () => {
    expect(gasCar.model).toBe('')
    expect(gasCar.color).toBe('')
    expect(gasCar.transmission).toBe('')
    expect(gasCar.hasGPS).toBeFalsy()
    expect(gasCar.hasSolarRoof).toBeFalsy()
    expect(gasCar.hasHeatedSeat).toBeFalsy()
  });
});
