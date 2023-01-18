import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static _instances = 0;
  warriorEnergy: EnergyType;

  constructor(readonly name: string) {
    super(name);
    Warrior._instances += 1;
    this.warriorEnergy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }

  get energyType(): EnergyType {
    return this.warriorEnergy;
  }
}