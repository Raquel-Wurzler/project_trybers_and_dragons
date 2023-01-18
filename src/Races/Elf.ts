import Race from './Race';

class Elf extends Race {
  _maxLifePoints: number;
  static _instances = 0;

  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;