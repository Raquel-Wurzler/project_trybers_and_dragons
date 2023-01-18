import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static _instances = 0;
  rangerEnergy: EnergyType;

  constructor(readonly name: string) {
    super(name);
    Ranger._instances += 1;
    this.rangerEnergy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }

  get energyType(): EnergyType {
    return this.rangerEnergy;
  }
}