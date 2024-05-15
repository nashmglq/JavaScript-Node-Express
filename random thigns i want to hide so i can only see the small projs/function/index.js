function add (x,y){
    return x+y;
}

function sub (x,y){
    return x-y;

}

function mult (x,y){
    return x*y;

}

function div (x,y){
    return x/y;

}

function isEmail(email){

    if(email){
    
        return email.includes("@gmail.com") ? true : false;

    }
}

console.log(isEmail("WOW@gmail.com"))
console.log(isEmail("www"))