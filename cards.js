


// function data() {

//     fetch('https://fakestoreapi.com/products')
//     .then(ans=>ans.json())
//     .then(data=>{
//         console.log(data);

//         let h = "<table><tr><th>Id</th><th>Title</th><th>Description</th><th>Price</th></tr>";
//         for(let i=0; i<10; i++){
//             h += "<tr>" +
//             "<td>"+  data[i].id + "</td>"+
//             "<td>" + data[i].description + "</td>" +
//             "<td>" + data[i].title + "</td>" +
//             "<td>" + data[i].price + "</td>" +
//             "<td>" + "<img src= '" + data[i].image + "' width= '200px' height='200px'>"+ "</td>" +
            
//             "</tr>";

//         }
//       h +=  "</table>" ;
  
// document.getElementById("head").innerHTML = h;
// }) 
//


// task  1

// let sum = 0
// let n =prompt(" enter the value of n ")
// n = Number.parseInt(n)
// for ( let i = 0; i<n ; i++){
//     sum  +=(i+1)
// }

// console.log(" sum of first" + n + "natural number is" + sum)



// // task  2

// let marks= prompt("what's your marks")
// switch(marks){
//     case 90:
//         console.log("grade a");
//         case 80:
//             console.log("grade b");
//             case 70:
//                 console.log("grade c");
// }

// task 3

//  let marks ={
//     harry:98,
//     rohan :70,
//     akash:7
// }
// for ( let i=0; i<Object.keys(marks).length; i++){
//     console.log(  "the marks of the students "  + Object.keys(marks)[i] + " are  "+  marks[Object.keys(marks)[i]]);
// }

//  task 4

// let marks ={
//     harry:98,
//     rohan :70,
//     akash:7
// }
// i=0;
// for ( let  i in marks){

//     console.log(  "the marks of the students "  + i + " are  "+ marks[i] );
// }


// // tqsk 5
// const mean = (a,b,c,d) => {
//     return ( a + b + c + d)/4  

// }
// console.log( 4,5,6,7);

// task 6

//  let name="jaspreet" ;
//  console.log( name);
//  console.log(name.length);

//  console.log('jas\"preet'.length);


//  let str = "    Hello\tWorld!      ";
//  console.log(str);
// let str = "      Hello\rWorld!";
// console.log(str);

 
// includes return true or false;

//  const line = "jass is a strong girl.";
//   const word = "jass" ;
//   console.log( line.includes(word))
//    console.log ( `The  word  "${word}" ${line.includes(word) ? "is" : "is not" } in the line.` )


//    const line2 = "she is very happy." ;
//    const word2 = "happy" ;
//    console.log (  `the  sbad "${ word2}" ${line2.includes(word2)  ? "is" : "is not" } in the line.`)

//    const str1 = "Saturday night plans";

// console.log(str1.startsWith("Sat"));
// // Expected output: true

// console.log(str1.endsWith("ans"));
// // Expected output: false
//  console.log( str1.toLowerCase());



// task 7 map method , return array

// let arr =[ 3,7,2,5,6]
// console.log( arr);

//  let newarr = arr.map((value )=>{
//     return value *2
//  })
// console.log( newarr);

// task 8 filter method ,it also return new arrray


// let demo=[ 4,1,6,2,8,] 
// console.log(demo);

// let newdemo = demo.filter((a) =>{
//    return a<3
// })
// console.log(newdemo);

// task 8 reduce method it return new value

// let red= [ 5,2,3,1,9]
// console.log(red);

// let newred = red.reduce((b)=>{
//    return b+2
// })

// console.log( newred);

// // practice 1 

//  let  task =[ 5,4,6,8, ]


//  let input= prompt( "enter a number below.");

//  input = Number.parseInt(input)
//   task.push(input);
 
//   console.log(task);
 

  // practice 2

//  let  task =[ 5,4,6,8, ]
// let x;

// do{
//  x= prompt( "enter a number below.");

//  x = Number.parseInt(x)
//   task.push(x);
  

// }while( x != 0);
//    console.log(task);
  

// practice 3

// let a = [ 76,20,50,44,61,30,10]
// console.log( a)

// const result = a.filter((value) =>{
//     return value%10 == 0 ;
// })

// console.log(result);

// practice 4


  let arr =[ 5,4,6,8, ];
   console.log( arr);

   const result = arr.map((value)  => {
      return value*value
   })
   console.log( result);