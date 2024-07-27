/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const person = {
    name:'stas',
    sname:'loh',
    favnum:'7'
}
const pInfo = `My name is ${person.name} ${person.sname} and my favourite number is ${person.favnum}`

console.log(pInfo)