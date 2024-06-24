class CustomError extends Error{ // an extends of error that we will throw
    constructor(message){ // think of the constructor as a function
        super(message); // call the constructor
    }
}

module.exports = {CustomError}