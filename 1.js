console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція getData симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    // Функція повертає новий проміс
    return new Promise((resolve, reject) => {
      // За допомогою setTimeout ми симулюємо затримку timeout, яка виникає при роботі з асинхронними джерелами даних
      setTimeout(() => {
        // Якщо об'єкт не пустий, ми викликаємо resolve з data
        if (Object.keys(data).length) {
          resolve(data);
        } else {
          // Якщо об'єкт пустий, ми викликаємо reject з новим об'єктом Error("Об'єкт пустий")
          reject(new Error("Об'єкт пустий"));
        }
      }, timeout);
    });
  }

  // Ми викликаємо getData з об'єктом { name: "John", age: 30, city: "New York" } і часом очікування 2000
  let promise = getData({ name: "John", age: 30, city: "New York" }, 2000);

  // Ми обробляємо дані, повернуті промісом
  promise
    .then(
      // У разі успіху виводимо в консоль дані
      (data) => console.log(data),
      // У разі помилки виводимо повідомлення помилки
      (error) => console.log(error.message)
    )
    .finally(
      // Незалежно від того, завершилось виконання проміса успіхом чи ні виводимо в консоль "Завдання 1 завершено"
      () => console.log("Завдання 1 завершено")
    );
}

// Викликаємо функцію task1
task1();



// ++++++++++++++++++++++++


const loadFile =(filename)=> 
new Promise((resolve, reject) => {
console.log(`Load file ${filename}...`);
// reject('Error');
setTimeout(() => resolve(null, `In file ${filename}`), 2000);
});

loadFile('img.png').then((data) => {
return data.toUpperCase();
}) 
.then((data) => {
  console.log(data);  
})
.catch((error) => {
  console.log('errror', error);
})
.finally(() =>{
  console.log("End");  
})