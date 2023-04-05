class ElementNotFoundError extends Error{
    constructor(message){
        super(message)
    }
}

class EmptyArrayError extends Error{
    constructor(message){
        super(message)
    }
}

class MultiplicatorUnitFailure extends Error{
    constructor(){
        super('klunk');
    }
}
