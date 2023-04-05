// class MultiplicatorUnitFailure extends Error {}
// let n=0;
// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b; 

//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }



// function reliableMultiply(a, b) {
//   return a*b;
// }

// //console.log(reliableMultiply(8, 8));
// // → 64


// for (;;) {
//     try {
//         primitiveMultiply(8,8);
//       break;
//     } catch (e) {
//       if (e instanceof MultiplicatorUnitFailure) {
//         console.log(primitiveMultiply(8,8));

//       } else {
//         //throw e;
//         console.log('fraffrig');
//         }
//     }
//   }

// console.log('bugs');
// function parseIntWithError(selectedStr) {
//   const result = parseInt(selectedStr);
//   if(isNaN(result)){
//     throw new Error('sei un cretino non hai messo un numero');
//   }
//     else{
//       return result;
//     }
//   }



//   // try{
//   //   const piango = parseIntWithError(' caffè')
//   //   console.log(piango);
//   // }
//   // catch(error){
//   //   console.log(' fuckyou');
//   // }

//    function indexOfWithError(array, element) {
//      if (array.length===0) {
//        throw new EmptyArrayError(' che cazzo combini,mi passi gli array vuoti')
//      }
//        else{
//          const index=array.indexOf(element);
//          if(index===-1){
//            throw new ElementNotFoundError('non c\'e nulla???')
//          }else{
//            return index;
//          }
//        }
//    }

//   //console.log(indexOfWithError([],'davide'))


//   try {
//     const index= indexOfWithError([], ' paperone')
//     console.log(index);
//   } catch(error){
//     if(error instanceof EmptyArrayError)
//       {
//       console.log('ho cercato in lungo e in largo ma purtroppo non ho nessun array nei chip')
//       console.log(error.message);
//       }
//       else if(error instanceof ElementNotFoundError)
//         {console.log('ci ho provato ma non ho visto niente')}
//       else{
//         console.log('non so cosa si è rotto')
//       }

//   }

//   function isElementInArray(array, element) {
//     try{
//       indexOfWithError(array,element);
//       return true;
//     }
//     catch(error){
//       if(error instanceof ElementNotFoundError){
//         return false;
//       }else {
//         throw error;
//         }
//   }
// }


// try  
//   {
//   const isInside = isElementInArray( ['qui','quo','qua'],'qui');
//   console.log(isInside);
//   }

// catch(error){
// console.log(error. message);
// }
// try
// {
//   const isInside = isElementInArray([],'qui');
//   console.log(isInside);
//   }

// catch(error){
// console.log(error. message);
// }