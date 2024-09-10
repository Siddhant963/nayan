// // variable
// // container which store the value 
// var a = 20;
// var a =34;
// let b= "23";
// //  b = 31;
//  const c = 23;
// console.log(a);
// console.log(b);
// console.log(c);
  
// // datatype in javascript 
// // number 23
// //  string
// //   boolean 
// //   Symbol
// //  undefined
// //     ,
// //     null
// //      BigInt
// const av = true

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof av);
// console.log(typeof Number);

// // opretoors in javascript 
// // arthmetic opretors  + - * /
// console.log(a+c);
// console.log(a-c);
// console.log(a*c);
// console.log(a/c);

// // aasigment opretors 
// //   a =b ;
//   console.log(a);

// // comperision opretors 
// //  === == > < , >= <= != aways retuen boolean value true false 
// const x = 34
// const y = "36"
// console.log(x==y);
// console.log(a>b);
// console.log(a<b);
// console.log(x===y);
// console.log(x!=y);

// // logical opretor 
// // || or koi ek condistion ture hone pe bhi kaam karega 
// // && dono condistion ke true hone pe chalega
// const mohanage = 12;
// if(mohanage >18 && mohanage < 60){ 
//     console.log("you can drive a car ");
    
// } 


//  loop in javascript 

// for( var i = 1; i<=10; ++i){ 
//   if(i%2==0){ 
//     console.log("*");
    
//   }else{ 
//     console.log("$");
    
//   }
  
// }
// var i =1;
// var sum = 0;
//   while(i<=100 ){
//     sum = sum +i;
//     console.log(sum);
//     i++;

//   }
//   console.log(sum);
  
// for(var i = 1;i<=10;i++){ 
//   console.log(2*i)
// }
// for(var i = 1;i<=10;i++){ 
//   console.log(3*i)
// }
// for(var i = 1;i<=10;i++){ 
//   console.log(4*i)
// }

// function tablePrinter(Num /* arrument*/){ 
//   for(var i = 1;i<=10;i++){ 
//     console.log(Num*i)
//   }
// }
// function hello(name){ 
//    var msg =  console.log("hello"+ " "+ name);
//   return msg;
// }

// tablePrinter(2);
// tablePrinter(3);// funsction call
// tablePrinter(4);
// tablePrinter(5);
// tablePrinter(6);
// tablePrinter(7);
// hello("siddhant");
// hello("virendra");
// hello("abhinav");
// hello();
// hello();

function isvote(age){ 
  if(age>=18){ 
    console.log("you can vote");
    
  } else{ 
    console.log("you can`t vote");
    
  }
}

function blood(age){
  if (age>18 && age<60) {
    console.log("you can donete blood");
    isvote(age)
    
  }
  else{
    console.log("you can not donete blood");
    isvote(age)
    
  }
}

blood(17);

function add(a,b){ 
  console.log(a+b);
  
}

add(12,43)
add(12,43)
add(12,43)


function holl(l,w,c){
   var area= l*w;
   var cost = area*c;
   console.log("your holl cost is " + cost);
   
}
holl(25,95,25)

function abhianv(num) {
  var squer = num*num ;
  console.log("shidhant"+num + "is"+squer );
  
  
}
abhianv(55)

function evanOrodd(num) {

  if (num%2==0) {

    console.log('number is evan');
    
    
  }
  else{
    console.log('number is odd');
    
  }
}
evanOrodd(26)

function bro(num) {
 
  
  if (num%10 ==0) {
    console.log('number is divsebal by 10');
    
    
  }
  else{
    console.log("number is not divsebal by 10");
    
  }
}
bro(100)

function name(num) {
for(var bar = 0;bar<=30;bar++){
  if(bar%5==0){
    console.log(bar);
    
  }
}
  
}
name();

