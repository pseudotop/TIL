/* ES5 something like class .. ? */
// function Car (options) {
//   this.title = options.title;
// }

// Car.prototype.drive = function () {
//   return 'Vroom';
// }

// var car = new Car({ title: 'Genesis' });
// 함수 오버라이딩 구림

/* ES6 class */
class Car {
  constructor ({ title }) {
    this.title = title;
  }

  drive() {
    return 'Vroom';
  }
}

class Audi extends Car {
  constructor(options) { // CONVENTION: 상속 받을 때, 인자 destructuring 을 안함
    super(options);
    this.color = options.color;
  }

  honk() {
    return '빵빵';
  }
}
const car = new Car({ title: 'A6'});
console.log(car);
console.log(typeof car);

/* 실습 1 - RPG게임 개발중..! */
// Monster 의 인스턴스가 생성될 때, health 가 100 이다.
// constructor() 는 options 라는 object 를 받으며, name key 를 가진다.
// Monster 의 인스턴스에게 name 을 선언하자.
class Monster {  
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

/* 실습 2 */
// Monster 클래스의 subclass Pickachu 클래스를 생성하자
// 생성자함수는 Monster 와 똑같다. options를 받는다.
// Snake 클래스는 bite() 메서드를 갖는다. 인자는 다른 Monster 의 객체
// bite() 를 통과한 다른 Snake 인스턴스는 체력(health) 가 10 깎인다.
class Pickachu extends Monster {
  constructor(options) {
    super(options);
  }

  bite(monster) {
    monster.health -= 10;
  }
}

const jobmob = new Monster({ name: '꼬렛' });
const pickachu = new Pickachu({ name: '데드풀' });

pickachu.bite(jobmob);
console.log(jobmob);
console.log(pickachu);