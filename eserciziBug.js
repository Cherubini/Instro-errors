function multiplyBy2Maybe(selectedNumber) {
    const randomNumber = Math.random()
    if(randomNumber<=0.2){
        return selectedNumber*2;
    }else{
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiplyBy2(selectedNumber) {
    try{
       const result = multiplyBy2Maybe(selectedNumber)
       return result;
    }
    
    catch(error){
        if(error instanceof MultiplicatorUnitFailure)
            {
            console.log(error.message);
            return reliableMultiplyBy2(selectedNumber);
            } 
          else
            console.log(error.message);
    }
    
}

console.log(reliableMultiplyBy2(4));

function reliableMultiplyBy2While(selectedNumber){
    while (true) {
        try {
            const res2=multiplyBy2Maybe(selectedNumber);
            return res2;
        } catch (error) {
            if (error instanceof MultiplicatorUnitFailure) {
                console.log(error.message);
            }
            else{
                break;
            }
        }
    }
}

console.log(' frizzi');
console.log(reliableMultiplyBy2While(4));


console.log('ESERCIZIO DUE');
 
const box1 = new Box();

function withBoxUnlocked(box, func) {
    box.unlock();
    try
    {
    func(box);
    }
    catch(error)
        {
        throw error;
        } finally{
            box.lock();  
        } 
}

withBoxUnlocked(box1, (box)=> {
    box.content.push('pezzo di oro')
}) 
console.log(box1)


try {
    withBoxUnlocked(box1, (box) => {
        throw new Error(' pirati a dritta porco il pane');
    })
} catch (error) {
    console.log(' errore' +error);
}