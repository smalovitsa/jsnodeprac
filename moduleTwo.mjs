import myNameResult, { myName } from './moduleOne.mjs';

console.log(myNameResult); // undefined, так как myName() возвращает undefined
myName(); // Вызовет функцию и выведет 'Bogdan'
