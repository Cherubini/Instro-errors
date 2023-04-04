class MultiplicatorUnitFailure extends Error {}
let n=0;
function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}



function reliableMultiply(a, b) {
  return a*b;
}

//console.log(reliableMultiply(8, 8));
// → 64


for (;;) {
    try {
        primitiveMultiply(8,8);
      break;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log('fraffrog :(');
        console.log(primitiveMultiply(8,8));
      } else {
        //throw e;
        console.log('fraffrig');
        }
    }
  }