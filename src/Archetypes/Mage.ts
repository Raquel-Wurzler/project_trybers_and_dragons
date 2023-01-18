import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static _instances = 0;
  mageEnergy: EnergyType;

  constructor(readonly name: string) {
    super(name);
    Mage._instances += 1;
    this.mageEnergy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage._instances;
  }

  get energyType(): EnergyType {
    return this.mageEnergy;
  }
}