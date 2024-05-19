function task1(callback) {
    setTimeout( () => {
        console.log("task 1")
        callback() //callback logic: hey I am done go to task2
    }, 3000);

}
function task2(callback) {
    setTimeout( () => {
        console.log("task 2")
        callback() //callback logic: hey I am done go to task3
    }, 2000);

}
function task3(callback) {
    setTimeout( () => {
        console.log("task 3")
        callback() //callback logic: hey I am done go to task4
    }, 2000);

}
function task4(callback) {
    setTimeout( () => {
        console.log("task 4")
        callback() //callback logic: hey I am done FINISH
    }, 2000);

}

task1(() => {
    task2(() => {
        task3(() => {
            task4()
        })
    });
});



//so do this, after that call the others?
// what if mauna callbacks kaysa function? ang mang yayare non hindi na nya wawait
// mauuna yung ibang function but it will also execute pero walang wait or callback