const title = "General Loops";
document.title = title;
document.querySelector("h1").innerHTML = title;

for(let i = 0; i < 10; i++){
    if (i === 2)
    {
        console.log('2 is different');
        continue;
    }
    console.log(i);
}

for(let i = 0; i < 10; i++){
    if (i === 5)
    {
        console.log('5 reached. breaking');
        break;
    }
    console.log(i);
}

let i = 0;
while(i < 10){
    console.log(`while ${i}`);
    i++;
}

i = 0;
do{ // Remember, always executes at least once.
    console.log(`do while ${i}`);
    i++;
} while(i < 10);

const cars = ['Ford', 'Chevy', 'Honda'];
cars.forEach(car => { // can also use for(let i = 0; i < cars.length; i++) { ....
    console.log(car);
});

cars.forEach(function(car, theIndex, theActualArray){
    console.log(`${car} ${theIndex} ${theActualArray}`);
});

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Ralph'},
];

const userIds = users.map(function(user){
    return user.id;
});

console.log(`User IDS: ${userIds}`);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x}: ${user[x]}`); // Nice name/value pair demo.
}
