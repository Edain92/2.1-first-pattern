export class CarDirector {
  constructor() { }

  buildGasCar(builder: CarBuilder) {
    builder.setColor('red')
    builder.setGPS(true)
    builder.setModel('test')
    return builder.build()
  }
}
