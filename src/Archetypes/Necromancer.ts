import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static _instances = 0;
  necromancerEnergy: EnergyType;

  constructor(readonly name: string) {
    super(name);
    Necromancer._instances += 1;
    this.necromancerEnergy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  get energyType(): EnergyType {
    return this.necromancerEnergy;
  }
}