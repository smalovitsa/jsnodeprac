// moduleOne.mjs
export const myName = () => {
    console.log('Bogdan');
};

// Экспортируем результат вызова функции
const myNameResult = myName(); // Это выведет 'Bogdan'
export default myNameResult;
