class CorePokemon {
  constructor(name, health, attack, defense){
    this.name = name;
    this.health =  health;
    this.attack = attack;
    this.defense = defense;
  }
}

const testPokemon = new CorePokemon('공욱재',1000,20,1000);
console.log(testPokemon);
// CorePokemon {name: '공욱재', health: 1000, attack: 20, defense: 1000}

class WrapPokemon extends CorePokemon {
  // * 코어 역할의 클래스로부터 'extends' 확장 하였다. 라는 뜻으로 class 선언
  constructor(name, health, attack, defense, type){
    super(name, health, attack, defense);
    // * super()라는 특별한 상속 메서드를 사용하면,
    // * 부모 클래스의 생성자를 호출할 수 있다.
  }
}