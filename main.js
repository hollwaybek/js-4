// let Num = +prompt('son')

// if (Num % 2 == 0) {
//     console.log('juft');
// }

// else if (Num % 2 !== 0) {
//     console.log('toq');
// }


// let phone = prompt('iphone nomi')


// if (phone == 'iphoneX') {
//     console.log(`Iphone X : 250$`);
// }

// if (phone == 'iphone11') {
//     console.log(`Iphone 11 : 300$`);
// }

// if (phone == 'iphone12') {
//     console.log(`Iphone 12 : 400$`);
// }

// if (phone == 'iphone13') {
//     console.log(`Iphone 13 : 500$`);
// }


// let yil = +prompt('yilni kiriting')

// if (yil % 4 ==0 ){
//     console.log('Kabisa yili');
// }

// else if (yil % 4 !==0 ) {
//     console.log('Kabisa yili emas');
// }
    

var randomNumber = Math.floor(Math.random() * 100) ;
var message = "Random son: " + randomNumber;
alert(message);


if (randomNumber % 2 ==0) {
alert(`${randomNumber} juft`)
}

else if (randomNumber % 2 !==0) {
    alert(`${randomNumber} toq`)
    }