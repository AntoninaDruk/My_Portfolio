
/*const userAge = 4;

switch (userAge) {
 case 1:
    console.log('Разрешение от мамы');
    break;
case 2:
    console.log('Вся жизнь впереди');
    break
case 3:
    console.log('Я умнею с каждым годом');
    break;
case 4:
     console.log('45 - баба ягодка опять');
     break;
case 5:
    console.log('Как вино...с годами только лучше');
    break; 
default:
    console.log('Елизавета II отойдите от компьютера! Вам пора пить таблетки');
    break;   
}
console.log('start');
for (let i = 0; i < 10; i++) {
    console.log('i = ' + i);
}
console.log('finish'); */

const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener("click", function() {

   content.classList.toggle('content-hidden');
   
  if (content.classList.contains('content-hidden')) {
    button.textContent = "Развернуть";
  } else {
    button.textContent = "Свернуть";
  }
});


