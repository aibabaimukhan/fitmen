// З А Д А Ч И
// let str = 'hello';
// console.log(typeof str);

let arr = ['Ваня', 'Таня', 'Оля'];
// Вывод в красивом виде:
// 0 => Ваня
// 1 => Таня
// 2 => Оля
// решение:
// arr.forEach(function(item, i, arr){
// 	document.write(`${i} - ${item}<br>`)
// });

let arr2 = [1,2,3,4,5,6,7,8,9];
// Вывод:
// 2,4,6,8
// 1,3,5,7,9
// 1,2,3,4,5,6,7,8,9,10
// Решение:
for(let i = 0; i < arr2.length; i++){	
		// document.write(arr2[i]);
        if(arr2[i] / 2 == 0) continue;
        document.write(arr2[i]);
}
// arr2.push('10'); document.write(arr2);

let arr3 = [1, 2, "Иван", 3, "Оля", 4];
// Вывод:
// Иван, Оля
// Если в массиве встретится Имя нужно вывести alert(Привет "имя из массива")
// Решение:
// let filt = arr3.filter(function(str){
// 	return str == typeof(String);
// 	// return number < 0;
// });
// document.write(filt);


let users = ['Ваня', 'Таня'];
// Создайте массив users с элементами "Ваня" и "Таня".
// Добавьте "Оля" в конец.
// Замените значение в "Таня" на "Петя".
// Ваш код для поиска значения должен
// работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте "Маша" и "Паша" в начало массива.
// Решение:
// users.push('Оля'); //document.write(users);
// users[1] = 'Петя';document.write(users);

let arr4 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Temporibus', 'hic?'];
// Вывод: (splice)
// Вывод длины массива
// Lorem ipsum dolor
// Temporibus hic?
// Lorem ipsum dolor sit adipisicing elit Temporibus hic?
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello world
// решение:
// document.write(arr4.length);
// arr4.splice(2, 7); document.write(arr4);
// arr4.splice(0, 8); document.write(arr4);
// arr4.splice(3, 3); document.write(arr4);
// arr4.splice(8, 2, 'hello', 'world'); document.write(arr4);

let arr5 = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
// Вывод: (filter)
// Вывести все отрицательные значения массива
// Вывести все положительные цифры массива
// решение:
// let filt = arr5.filter(function(number){
// 	return number >= 0;
// 	return number < 0;
// });
// document.write(filt);

let arr6 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// Вывод: 
// 5,5,5,3,4
// решение:
// let name = arr6.map(function(name){
// 	return name.length;
// });
// console.log(name);