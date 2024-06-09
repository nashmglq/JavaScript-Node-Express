function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let task1 = false;

            if(task1){
                resolve ("task 1 passed");
            }
            else{
                reject("task 1 failed")
            }
        }, 3000);
    });
}


function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let task2 = true;

            if(task2){
                resolve ("task 2 passed");
            }
            else{
                reject("task 2 failed")
            }
        }, 2000)
    })


}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let task3 = false;

            if(task3){
                resolve ("task 3 passed");
            }
            else{
                reject("task 3 failed")
            }
        }, 4000)
    })
    
}

task1().then(value => {
    console.log(value);
    return task2()
}).then(value => {
    console.log(value);
    return task3()
}).then(value => {
    console.log(value);
    console.log("ALL task complete")
}).catch(error => {
    console.log(error)
}) // this will catch reject 