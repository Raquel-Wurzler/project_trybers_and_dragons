import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public player1: Fighter,
    public monster: Fighter[] | SimpleFighter[],
  ) {
    super(player1);
    this.player1 = player1;
    this.monster = monster;
  }

  fight(): number {
    this.monster.forEach((m) => {
      while (this.player1.lifePoints !== -1 && m.lifePoints !== -1) {
        this.player1.attack(m);
        m.attack(this.player1);
      }
    });
    return super.fight();
  }
}