import Race from './Race';

class Orc extends Race {
  _maxLifePoints: number;
  static _instances = 0;

  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;