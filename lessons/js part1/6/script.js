// // function fun(){

// // }

// class Person{
//     name = 'Kuba'
//     age = 15
//     #privat = 'Privat'
//     static stat = 'Static123'


//     constructor (name = 'Kuba', age = 15, password, privat){
//         this.name = name;
//         this.age = age;
//         this.password = this.#prime(password);
//         this.#privat = privat;
//     }

//     print() {
//         console.log('privat: ', this.#privat);
//     }

//     #prime (pass) {
//         if ((pass + '').length < 8){
//             console.log(' Пороль меньше 8 символов');
//             return 'Password1234567890'
//         } else{
//             console.log('Пароль принят');
//             return pass
//         }
//     }

//     static statInfo () {
//         console.log(this.stat);
        
//     }
// }

// Person.statInfo()
// console.log(Person.stat);


// let user = new Person('Beka', 43, 12345678, 'Prime');
// console.log('User', user);
// console.log('Name: ', user.name);
// console.log('Age: ', user.age);
// console.log('Password: ', user.password);


// class Student{
//     name = 'Beki'
//     age = 15
//     group
//     #points = 'Points'

//     constructor (name = 'Beki', age = 15, group = '27-1', points){
//         this.name = name;
//         this.age = age;
//         this.group = group;
//         this.#points = points;
//     }
// }

// let student = new Student('Bekislam', 16, '25-1', 1000)
// console.log('Name; ', student.name);
// console.log('Age: ', student.age);
// console.log('Group: ', student.group);

// class Man extends Person{
//     constructor(name, age, password, privat, nameWork){
//         super(name, age, password, privat);
//         this.nameWork = nameWork
//     }
//     name () {
//         console.log(this.name);
//     }
// }


// let french = new Man('Naaleon', 200, 123456, 'Prime', 'Polk')

// Man.statInfo();
// console.log(french);
// french.print()

