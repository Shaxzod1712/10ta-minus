// 

///////// Birinich misol birinch variant

// function obj(num1 = 0 , num2 = 0 ) {
//     if(num1 + num2 >= 3){
//         console.log(num1 + num2);
//     }
//     else {
//         return (num3) => {
//             console.log(num1 + num3);
//         };
//     } 
// }

// obj(1,2);
// obj(1)(2);

// //////// Ikinchi misol

// const obj1 = {
//     a: 1,
//     b: 2,
//     getA() {
//         console.log(this.a);
//         return this
//     },
//     getB() {
//         console.log(this.b);
//     },
// }

// obj1.getA().getB();

///////// Birinich misol ikinchi variant

// function obj(num1, num2) {
//     if (num1,num2) {
//       console.log(num1 + num2);
//     } else {
//       return (num3) => {
//         console.log(num1 + num3);
//       };
//     }
//   }
  
//   obj(1,2);
//   obj(1)(2);