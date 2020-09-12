// TODO: write your code here
export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 0;
}

/**
  * Func Функция корректирует здоровье персонажа в соответсвии с наносимым уроном
  *
  * @param {number} points - Наносимый урон
  */
// Не могу понять почему не создается файл global в docs при запуске jsdoc ?
Character.prototype.damage = function (points) {
  this.health -= points * (1 - this.defence / 100);
  if (this.health <= 0) {
    this.health = 0;
  }
};
