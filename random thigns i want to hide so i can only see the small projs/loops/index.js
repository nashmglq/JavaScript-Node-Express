// let login = false;
// let username;
// let password;


// do{
//     username = window.prompt ("USERNAME:");
//     password = window.prompt ("PASSWORD");

//     if (username === "username" && password === "password"){
//         login = true;
//         console.log ("LOGGED IN!")
//     }


//     else{
//         console.log ("INVALID")
//     }
// }
// while (!login)



let login = false;
let username;
let password;


while (!login){
    username = window.prompt ("USERNAME:");
    password = window.prompt ("PASSWORD");

    if (username === "username" && password === "password"){
        login = true;
        console.log ("LOGGED IN!")
    }


    else{
        console.log ("INVALID")
    }
}


