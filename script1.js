
/* 
1. Fix following code at least in 2 different ways

Actual result:

Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined


Expected result:
Index: 0, element: 100
Index: 1, element: 101
Index: 2, element: 102
Index: 3, element: 103

*/

//First option
/*const numbers = [100, 101, 102, 103];
   setTimeout(function () {
      for (var i = 0; i < numbers.length; i++) {
    console.log('Index: ' + i + ', element: ' + numbers[i]);
   };
  }, 1000);*/

  //Second option
  /*const numbers = [100, 101, 102, 103];
  let i=0;
  let getErrayElement = setTimeout(function getEl() {
      console.log('Index: ' + i + ', element: ' + numbers[i]);
      i++;
      if(i<numbers.length){
         getErrayElement = setTimeout(getEl(),1000)};
    }, 1000);
*/








/*
2. Write a recursion function to console.log() all values in every nested object.
Recursion is used here to support nested structures of unlimited depth length

Expected result (order doesn't matter here):

'child_1'
'child_2'
...
etc.

*/

/*const items = [
   { 
       value: 'child_1',
       parents: [{
           value: 'parent_1',
           parents: [{
               value: 'grandparent_1',
               parents: [],
           }],
       },
       {
           value: 'parent_2',
           parents: [{
               value: 'grandparent_2',
               parents: [{
                   value: 'grandgrandparent_2',
                   parents: null,
               }],
           }],
       }],
   },
   { 
       value: 'child_2',
       parents: null,
   }
];*

function ShowFamily(it) {
for (let i=0; i< it.length; i++){
   if(!Array.isArray(it[i].parents)){
      console.log(it[i].value)
   }
   else{
      console.log(it[i].value)
      let k = it[i].parents;
    ShowFamily(k);
      }
   }
}

ShowFamily(items);*/







 /*
3. Write a functions for promise chain
    - getSum        -- sums two arguments and resolves result in 2 sec
    - double        -- multiplies its first agrument by 2 and resolves result in 2 sec 
    - factorial     -- calculates factorial of agrument and resolves result in 2 sec
    - errorHandler  -- just console.error its first argument

*/

/*getSum(i, j)
    .then(double)
    .then(factorial)
    .then(result => {
        console.log(result);
    })
    .catch(errorHandler);*/

 /*Option One   
   let i = 2;
   let j = 1;

    function factorial(n) {
      return (n != 1) ? n * factorial(n - 1) : 1;
    }


    new Promise(function getSum(resolve, reject) {

      setTimeout(() => resolve(i+j), 2000);
    
    }).then(function(result) {
    
      return new Promise((resolve, reject) => { 
        setTimeout(() => resolve(result * 2), 2000);
      });
    
    }).then(function(result) {
    
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(factorial(result)), 2000);
      });
    
    }).then(function(result) {
    
      console.log(result); 
    
    }).catch(console.error(i));*/


  /*Second option*/  
   let i = 2;
   let j = 1;
   

   
   getSum ()
   .then(function(response){
     return double(response);
   }).then(function(response){
    return factorial (response);
   })
   .then(function(response){
    return result (response);
  }).catch(console.error(i));


    function getSum (){
      return new Promise (function (resolve){
        setTimeout(function (){
          resolve(i+j);
        }, 2000);

    });
  };


    function double (getSumResult){
      return new Promise (function (resolve){
        setTimeout(function (){
          resolve(getSumResult*2);
          alert(getSumResult*2);
        }, 2000);

    });
    };
   

    function factorial(doubleResult) {
      return new Promise (function (resolve, reject){
        setTimeout(function (){
         function factorial1(n) {
            return (n != 1) ? n * factorial1(n - 1) : 1;
          }
          resolve (factorial1(doubleResult));

        }, 2000);

    });   

    };

    function result (factorialResult) {
      return new Promise (function (){
        setTimeout(function (){
         console.log(factorialResult);
        }, 2000);

    });
    };
   

