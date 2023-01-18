import Race from './Race';

class Halfling extends Race {
  _maxLifePoints: number;
  static _instances = 0;

  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;