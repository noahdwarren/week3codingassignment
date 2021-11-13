//1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a
function subtractAge(age1, age2) {
    return age1 - age2;
}
console.log(subtractAge(ages[ages.length -1], ages[0]));

//b
ages.push(54);
console.log(subtractAge(ages[ages.length - 1], ages[0]));

//c
let sumAges = 0;
for(i = 0; i < ages.length; i++) {
    sumAges += ages[i];
}
console.log(sumAges);
let avarageAges = sumAges / ages.length;
console.log(avarageAges);

//2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//a
let sumNames = 0;
for(i = 0; i < names.length; i++) {
    sumNames += names[i].length;
}
let averageNames = sumNames / names.length;
console.log(averageNames);

//b
let namesTogether = '';
for(i = 0; i < names.length; i++) {
    namesTogether += names[i] + ' ';
}
console.log(namesTogether);

//3
//You can access the last element of an array by using the location of the last element in something like this: array[7], or by using array.length -1.

//4
//You can only access the first element of an array by using the location like so: array[0].

//5
let nameLengths = [];
for(i =0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6
let sumNames2 = 0;
for(i = 0; i < nameLengths.length; i++) {
    sumNames2 += nameLengths[i];
}
console.log(sumNames2);

//7
let wordConcat = '';
function repeatWords(word, n) {
    for(i = 1; i <= n; i++) {
        wordConcat += word;
    }
    return wordConcat;
}
console.log(repeatWords('fish', 5));

//8
function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(createFullName('Sam', 'Smith'));

//9
function greaterThan100(array) {
    let sumOfArray = 0;
    for(i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }
    return sumOfArray > 100;
}
console.log(greaterThan100(ages));

//10
function averageOfArray(array) {
    let sumOfArray = 0;
    for(i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }
    return sumOfArray / array.length;
}
console.log(averageOfArray(ages));

//11
function array1HasHigherAverage(array1, array2) {
    let sumOfArray1 = 0
    let sumOfArray2 = 0

    for(i = 0; i < array1.length; i++) {
        sumOfArray1 += array1[i];
    }
    averageOfArray1 = sumOfArray1 / array1.length;

    for(i = 0; i < array2.length; i++) {
        sumOfArray2 += array2[i];
    }
    averageOfArray2 = sumOfArray2 / array2.length;

    return averageOfArray1 > averageOfArray2;
}
console.log(array1HasHigherAverage(ages, nameLengths));

//12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    }
    return false;
}
console.log(willBuyDrink(true, 10.51));

//13
function willIGoParty(numberOfPeople, numberOfKnownPeople, isObligated) {
    if (isObligated == true) {
        return 'I am going to the party.';
    } 
    if (numberOfPeople > 15 && numberOfKnownPeople < 4) {
        return 'I am not going to the party.'
    } else {
        return 'I am going to the party.';
    }
}

console.log(willIGoParty(20, 5, false));
