// array of numbers
let numbers = createNumbers(1000);

// function that finds the smallest number using O(n)
function getSmallNumber1(numbers: number[]){
    // set value of index 0 to minNumber
    let minNumber = numbers[0];
    // start timer
    let t0 = performance.now();
    // loop through array to find smallest number
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i]
        }
    }
    // end timer
    let t1 = performance.now()
    // change in time
    let dt = t1 - t0;

    console.log(`[GetSmallestNumber1()] - Smallest Number is: ${minNumber}, Time Span = ${dt} ms`);
}

// function that finds the smallest number using O(n^2)
function getSmallNumber2(numbers: number[]){
    // variable that will indicate if smallest number is found
    let isMin:boolean;
    // start timer
    let t0 = performance.now();
    // loop through array to find smallest number
    for (let i = 0; i < numbers.length; i++) {
        isMin = true;
        // nested looop to simulate O(n^2) search
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                isMin = false;
            }
        }
        // if isMin remains true, then log the value to the console and break out of the loop
        if (isMin) {
            // end timer
            let t1 = performance.now();
            // change in time
            let dt = t1 - t0
            console.log(`[GetSmallestNumber2()] - Smallest Number is: ${numbers[i]}, Time Span = ${dt} ms`);
            break;
        }
    }
}

// display all numbers
function displayNumbers(numbers: number[]){
    for (let i of numbers) {
        console.log(i)
    }
}
// create an array with random numbers as a value
function createNumbers(x:number){
    let numbers = [];

    for (let i = 0; i < x; i++) {
        numbers[i] = Math.floor(Math.random() * x * 10)
    }

    return numbers;
}


displayNumbers(numbers);
getSmallNumber1(numbers);
getSmallNumber2(numbers);
